import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/shared/interfaces/city';
import { FirebaseService } from 'src/app/shared/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saved-cities',
  templateUrl: './saved-cities.component.html',
  styleUrls: ['./saved-cities.component.css']
})
export class SavedCitiesComponent implements OnInit {

  cities : City[];
  city: any = { };
  panelOpenState = false;
  updateForm = true;
  // saveForm = true;
  userId = this.route.snapshot.paramMap.get('id');

  constructor(private firebaseSevice: FirebaseService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      console.log(id);
      this.getCities(id);
    }
  }

  getCities(id:string){
    this.firebaseSevice.getUserCities(id)
    .subscribe(
      cities => {
        console.log(cities);
        this.cities = cities;
      }
    )
  }

  saveCityUpdate(newCity:City){
    this.firebaseSevice.updateCity(this.userId, this.city.id, newCity);
    this.city = {};
  }

  updateCity(city: any){
    this.city.name = city.weather.name;   //city.weather is coming from the TS file go check
    this.city.description = city.weather.description;
    this.city.temperature = city.weather.temperature;
    this.city.id = city.id;
  }

  deleteCity(city: City){
    this.firebaseSevice.deleteCity(this.userId, city);
  }
}
