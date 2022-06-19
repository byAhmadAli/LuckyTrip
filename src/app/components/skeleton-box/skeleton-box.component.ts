import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skeleton-box',
  host: {
    class: 'pulse',
  },
  templateUrl: './skeleton-box.component.html',
  styleUrls: ['./skeleton-box.component.scss'],
})
export class SkeletonBoxComponent {
  width: string;
  height: string;
  className: string;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const host = this.host.nativeElement;

    if (this.className) {
      host.classList.add(this.className);
    }

    host.style.setProperty('--skeleton-rect-width', this.width ?? '100%');
    host.style.setProperty('--skeleton-rect-height', this.height ?? '20px');
  }
}
