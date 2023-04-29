import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehicle} from "./vehicle";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private apiUrl:string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }
}
