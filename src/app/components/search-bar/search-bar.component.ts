import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Input() destination: string;
  @Input() isSticky: boolean = false;
  @Input() placeholder: string = 'Enter a Destination...';
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {}

  navigateTo() {
    const destination = this.destination;
    this._router.navigate(['.'], {
      relativeTo: this._route.root,
      queryParams: {
        destination,
      },
      queryParamsHandling: 'merge',
    });
  }
}
