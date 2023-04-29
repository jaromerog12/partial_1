import {Component, Input, OnInit} from '@angular/core';
import {Vehicle} from "../vehicle";

@Component({
  selector: 'app-summary-vehicle',
  templateUrl: './summary-vehicle.component.html',
  styleUrls: ['./summary-vehicle.component.css']
})
export class SummaryVehicleComponent implements OnInit{
  @Input('data') vehicles: Vehicle[] = [];
  summary: (string | number) [][] = [];
  constructor() {}

  ngOnInit(): void {
    this.summary = this.getSummary(this.vehicles);
  }

  getSummary(vehicles: Vehicle[]): (string | number) [][] {
    const uniqueBrand: string[] = [...new Set(vehicles.map((x: Vehicle) => x.marca))];
    const summary: (string | number) [][] = uniqueBrand.map((marca: string) => [
      marca,
      vehicles.filter((v: Vehicle):boolean => v.marca === marca).length
    ]);
    return this.sortSummaryByQuantityDesc(summary);
  }

  sortSummaryByQuantityDesc(summary: Array<any>){
    return summary.sort((m1, m2) => (m1[1] < m2[1] ? 1 : -1));
  }



}
