import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import {HttpClientModule} from "@angular/common/http";
import { SummaryVehicleComponent } from './summary-vehicle/summary-vehicle.component';


@NgModule({
  declarations: [
    ListVehiclesComponent,
    SummaryVehicleComponent
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
