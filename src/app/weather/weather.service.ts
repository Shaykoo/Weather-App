import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { WeatherData } from '../shared/interfaces/weather-data';
import { Weather } from '../shared/interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService{
  private URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  private KEY = '1ac1392ceb8ffe7be751b1b7089fb39e';
  private IMP  = '&units=imperial';  //getting temprature in farenheit

  constructor(private http: HttpClient) { }

  searchWeatherData(cityName:string):Observable<Weather>{   //returns an Observable
    return this
            .http
            .get<WeatherData>(`${this.URL}${cityName}&APPID=${this.KEY}${this.IMP}`) //Weather data as we are getting this interface like JSON object from the API
            .pipe(
              map(data => this.transformWeatherData(data)), //we transformed the data into the JSON object that we have defined in one of our interface
              tap(data => console.log(JSON.stringify(data))), //returns Observable same as it's getting in data which is weather object from the API, returns only when there is no error that's why we need to define the error in the next line
              catchError(this.handleError)
            )
  }

  private transformWeatherData(data: WeatherData): Weather{  //data:WeatherData-> as we are getting this kind of interface from the API and we defined this interface too by seeing the API at the first place
    return {  // but we are returning the observable Weather as we want this type of interface of JSON object for our application
      name: data.name,
      country:data.sys.country,
      image:`http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      description: data.weather[0].description,
      temprature: data.main.temp,
      lat: data.coord.lat,
      lon: data.coord.lon
    }

  }

  private handleError(res: HttpErrorResponse){
    console.error(res);
    return throwError(res.error || 'Server Error');
  }
}
