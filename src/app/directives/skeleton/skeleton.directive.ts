import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { SkeletonBoxComponent } from '../../components/skeleton-box/skeleton-box.component';

function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

@Directive({ selector: '[skeleton]' })
export class SkeletonDirective {
  @Input('skeleton') isLoading = false;
  @Input('skeletonRepeat') size = 1;
  @Input('skeletonWidth') width: string;
  @Input('skeletonHeight') height: string;
  @Input('skeletonClassName') className: string;

  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {}

  ngOnChanges(changes: any) {
    if (changes.isLoading) {
      this.vcr.clear();

      if (changes.isLoading.currentValue) {
        Array.from({ length: this.size }).forEach(() => {
          const ref = this.vcr.createComponent(SkeletonBoxComponent);

          Object.assign(ref.instance, {
            width: this.width === 'rand' ? `${random(30, 90)}%` : this.width,
            height: this.height,
            className: this.className,
          });
        });
      } else {
        this.vcr.createEmbeddedView(this.tpl);
      }
    }
  }
}
