import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { ToolbarComponent } from '../ui/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { FirebaseModule } from './firebase.module';
import { WeatherModule } from '../weather/weather.module';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    FirebaseModule,
    WeatherModule
  ],
  exports:[ToolbarComponent]
})
export class CoreModule { }
