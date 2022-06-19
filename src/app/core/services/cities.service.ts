import { Injectable } from '@angular/core';
import { ICities, ICity } from '../models';
import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const root = environment.API || 'api';
type TGetCitiesParams = {
  destination: string;
};
type TGetCityParams = {
  id: string;
};
@Injectable({ providedIn: 'root' })
export class CitiesService {
  constructor(private http: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  getCities({
    destination = '',
  }: TGetCitiesParams): Observable<HttpResponse<ICities>> {
    return this.http
      .get<ICities>(
        `${root}/top_five/destinations?search_type=city&search_value=${destination}`,
        { observe: 'response' }
      )
      .pipe(catchError(this.handleError));
  }

  getCity({ id = '' }: TGetCityParams): Observable<HttpResponse<ICity>> {
    return this.http
      .get<ICity>(`${root}/top_five/destination?id=${id}`, {
        observe: 'response',
      })
      .pipe(catchError(this.handleError));
  }
}
