import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListVehiclesComponent} from "./vehicle/list-vehicles/list-vehicles.component";

const routes: Routes = [
  {path: '**', component: ListVehiclesComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
