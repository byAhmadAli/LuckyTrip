import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICities } from '../../core/models';
import { CitiesService } from '../../core/services/cities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showAdd = false;
  cities: Array<ICities> | Array<any>;
  destination: string;
  isLoading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    this._route.queryParams.subscribe((params) => {
      this.destination = params['destination'];
      if(this.destination){
        this.getCities();
      }else{
        this.isLoading = true;
      }
    });
  }

  getCities() {
    this.isLoading = true;
    this.citiesService
      .getCities({
        destination: this.destination,
      })
      .subscribe((resp) => {
        this.cities = resp.body?.destinations || [];
        this.isLoading = false;
      });
  }
}
