import { Component } from '@angular/core';
import {VehicleService} from "../vehicle.service";
import {Vehicle} from "../vehicle";

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent {

  vehicles: Vehicle[] = [];
  constructor(private service: VehicleService) {
    this.getVehicles();
  }

  getVehicles() {
    this.service.getVehicles().subscribe(
      {
        next: data => {
          this.vehicles = data;
        },
        error: () => alert("Error obteniendo listado de vehículos")
      }
    )
  }
}
