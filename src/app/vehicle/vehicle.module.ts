import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import {HttpClientModule} from "@angular/common/http";
import { SummaryVehicleComponent } from './summary-vehicle/summary-vehicle.component';


@NgModule({
  declarations: [
    SummaryVehicleComponent,
    ListVehiclesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    SummaryVehicleComponent,
    ListVehiclesComponent
  ]
})
export class VehicleModule { }
