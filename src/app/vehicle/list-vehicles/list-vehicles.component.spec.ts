import { ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';

import { ListVehiclesComponent } from './list-vehicles.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Vehicle} from "../vehicle";
import {min, of} from "rxjs";
import {By} from "@angular/platform-browser";
import {VehicleService} from "../vehicle.service";
import {SummaryVehicleComponent} from "../summary-vehicle/summary-vehicle.component";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('ListVehicleComponent', () => {
  let component: ListVehiclesComponent;
  let fixture: ComponentFixture<ListVehiclesComponent>;
  let vehicles: Array<Vehicle> = [];
  let service: VehicleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVehiclesComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ VehicleService ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVehiclesComponent);
    vehicles = [];
    for(let i=0; i< 3; i++){
      let vehicle = Vehicle.allAttributesInstance(
        faker.datatype.number(),
        faker.random.word(),
        faker.random.word(),
        faker.random.word(),
        faker.datatype.number({min:1990, max: 2023}),
        faker.datatype.number({min:100000, max: 200000}),
        faker.random.word(),
        faker.image.avatar()
      )
      vehicles.push(vehicle);
    }
    service = TestBed.inject(VehicleService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show list vehicles and summary tables', () => {
    spyOn(service, 'getVehicles').and.returnValue(of(vehicles));
    component.ngAfterViewInit();
    fixture.detectChanges();
    let expectedHeader = fixture.debugElement.queryAll(By.css('th.thHeader'));
    expect(expectedHeader.length > 0).toBeTrue();
    let expectedRows = fixture.debugElement.queryAll(By.css('tr.trVehicles')).length;
    expect(expectedRows).toBe(3)
    let expectedSummary = fixture.debugElement.query(By.css('app-summary-vehicle'));
    expect(expectedSummary).toHaveSize(1);
  });

  it('should does not show list vehicles and does not show summary table', () => {
    vehicles = [];
    spyOn(service, 'getVehicles').and.returnValue(of(vehicles));
    component.ngAfterViewInit();
    fixture.detectChanges();
    let expectedHeader = fixture.debugElement.queryAll(By.css('th.thHeader'));
    expect(expectedHeader.length > 0).toBeTrue();
    let expectedRows = fixture.debugElement.queryAll(By.css('tr.trVehicles')).length;
    expect(expectedRows).toBe(0)
    let expectedSummary = fixture.debugElement.query(By.css('app-summary-vehicle'));
    expect(expectedSummary).toBeNull();
  });
});
