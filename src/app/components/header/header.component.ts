import { Component, OnInit, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() defualtSticky: boolean = false;
  @Input() isSticky: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.isSticky = this.defualtSticky;
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = this.defualtSticky || window.pageYOffset >= 250;
  }
}
