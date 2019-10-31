import { Injectable } from '@angular/core';
import { Weather } from '../shared/interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  weather: Weather = {  // referencing the interface 'Weather'
    name: '',
    country:'',
    image: '',
    description: null,
    temprature: null,
    lat: null,
    lon: null
  }

  constructor() { }

  // getCelcius() {
  //   let fTemp = this.weather.temprature;
  //   let fToCel = (fTemp - 32) * 5 / 9;
  //     console.log(fToCel);
  // } 

  // getCelcius
}
