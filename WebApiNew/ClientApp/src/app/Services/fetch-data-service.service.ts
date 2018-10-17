import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WeatherForecast } from './../Model/WeatherForecastModel';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/Observable/throw';
 

@Injectable({ providedIn: 'root', })

export class FetchDataService {

  private _url: string = "api/SampleData/WeatherForecasts";

  constructor(private http: HttpClient) { }

  getForecasts(): Observable<WeatherForecast[]>{
    return this.http.get<WeatherForecast[]>(this._url);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");

  }
}

