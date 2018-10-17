import { Component, Inject, OnInit } from '@angular/core';
import { FetchDataService } from './../Services/fetch-data-service.service';
import { WeatherForecast } from './../Model/WeatherForecastModel';
import { HttpClient } from '@angular/common/http';
import { forecast } from '../Forecast';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {

  public forecasts = [];
  public errorMsg;
  

  constructor(private fetchDataService: FetchDataService) { }
  
  ngOnInit() {
    this.getForcasts();
  }

  getForcasts() {
    let weather: WeatherForecast[];

    this.fetchDataService.getForecasts()
      .subscribe(result => this.forecasts = result,
                  error => this.errorMsg = error);

    }//, error => console.error(error));
  }


      


  



