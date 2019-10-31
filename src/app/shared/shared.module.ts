import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC57LLdYTtsUYw0c_oD_PyFtKseCBswPRE'
    })
  ],
  exports:[ AgmCoreModule ]
})
export class SharedModule { }
