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
}
