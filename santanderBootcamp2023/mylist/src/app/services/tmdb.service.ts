import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Series } from '../models/series';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  favoriteSeries: Series | any

  constructor(private http: HttpClient) { }

  getFavoriteList(): Observable<Series> {
    this.favoriteSeries = this.http.get<Series>(environment.api, environment.options)
    return this.favoriteSeries
  }
}
