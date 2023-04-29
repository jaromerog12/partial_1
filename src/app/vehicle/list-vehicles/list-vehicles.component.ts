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
  summary: (string | number)[][] = [];
  constructor(private service: VehicleService) {
    this.getVehicles();
  }

  getVehicles() {
    this.service.getVehicles().subscribe(
      {
        next: (data: Vehicle[]) => {
          this.vehicles = data;
          this.summary = this.getSummary(data);
        },
        error: () => alert("Error obteniendo listado de vehículos")
      }
    )
  }

  getSummary(vehicles: Vehicle[]): (string | number) [][] {
    const uniqueBrand: string[] = [...new Set(vehicles.map((x) => x.marca))];
    console.log(uniqueBrand);
    const summary: (string | number) [][] = uniqueBrand.map(marca => [
      marca,
      vehicles.filter((v: Vehicle):boolean => v.marca === marca).length
    ]);
    return this.sortSummaryByQuantityDesc(summary);
  }

  sortSummaryByQuantityDesc(summary: Array<any>){
    return summary.sort((m1, m2) => (m1[1] < m2[1] ? 1 : -1));
  }
}
