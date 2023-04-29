import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {VehicleService} from "../vehicle.service";
import {Vehicle} from "../vehicle";
import {SummaryVehicleComponent} from "../summary-vehicle/summary-vehicle.component";

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements AfterViewInit{

  vehicles: Vehicle[] = [];

  constructor(private service: VehicleService) {
  }

  ngAfterViewInit(): void {
    this.getVehicles();
    }

  getVehicles() {
    this.service.getVehicles().subscribe(
      {
        next: (data: Vehicle[]) => {
          this.vehicles = data;
        },
        error: () => alert("Error obteniendo listado de vehículos")
      }
    )
  }
}
