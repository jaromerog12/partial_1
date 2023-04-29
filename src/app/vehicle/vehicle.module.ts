import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ListVehiclesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ListVehiclesComponent
  ]
})
export class VehicleModule { }
