import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICity } from '../../core/models';
import { CitiesService } from '../../core/services/cities.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  cityId: string;
  city: ICity | null;
  isLoading: boolean = true;
  isLoadingBlog: boolean = true;
  constructor(
    private _route: ActivatedRoute,
    private citiesService: CitiesService
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.cityId = params['id'];
      this.isLoading = true;
      this.citiesService.getCity({ id: this.cityId }).subscribe((resp) => {
        console.log(resp.body);
        this.city = resp.body;
        this.isLoading = false;
      });
    });
  }
}
