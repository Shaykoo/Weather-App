import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from 'src/app/shared/interfaces/weather';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  query = '';
  errorMessage: any = {};

  constructor(private weatherService:WeatherService,
              private weatherDataService: WeatherDataService) { }

  ngOnInit() {
  }

  set weather(data:Weather){  // we are seding the whole JSON data object(weather) in the interface we want to a service which we can inject in any component where we want to use this data 
    this.weatherDataService.weather = data;
  }

  search(query){
    this.weatherService.searchWeatherData(this.query)
    .subscribe(
      weather => this.weather = weather, //weather is the response object from the service containing all the info
      error => this.errorMessage = error,
      () => this.query = ''  // setting back query to empty
    )
  }
}
