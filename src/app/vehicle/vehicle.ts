export class Vehicle {
  id: number;
  marca: string;
  linea: string;
  referencia: string;
  modelo: number;
  kilometraje: number;
  color: string;
  imagen: string;

  constructor(){
    this.id = 0;
    this.marca = '';
    this.linea = '';
    this.referencia = '';
    this.modelo = 0;
    this.kilometraje = 0;
    this.color = '';
    this.imagen = '';
  }

  static allAttributesInstance (
    id: number,
    marca: string,
    linea: string,
    referencia: string,
    modelo: number,
    kilometraje: number,
    color: string,
    imagen: string
  ):Vehicle {
    let vehicle = new Vehicle();
    vehicle.id -= id;
    vehicle.marca = marca;
    vehicle.linea = linea;
    vehicle.referencia = referencia;
    vehicle.modelo = modelo;
    vehicle.kilometraje = kilometraje;
    vehicle.color = color;
    vehicle.imagen = imagen;
    return vehicle;
  }
}
