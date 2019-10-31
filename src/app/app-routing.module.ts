import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'weather'},
  {path:'weather', 
   loadChildren:'./weather/weather.module#WeatherModule'    //loadChildren is going to load all the routes that we define in weather routing Module
  },
  {path:'user', 
   loadChildren:'./user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
