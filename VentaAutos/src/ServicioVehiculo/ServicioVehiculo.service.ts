import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioVehiculoService {

constructor() { }


private ListaAutos = [
  { "Foto":"./assets/imagenes/Carro01.jpg", "marca":"Chevrolet", "modelo":"Logan", "anio":"2025", "color":"Gris", "kilometros":"12000", "precio":"25131", "calificacion":8 },
  { "Foto":"./assets/imagenes/Carro02.jpg", "marca":"Cherry", "modelo":"Cherry", "anio":"2023", "color":"Verde", "kilometros":"12514582", "precio":"251561", "calificacion":4 },
  { "Foto":"./assets/imagenes/Carro03.jpg", "marca":"Ford", "modelo":"Conquistador", "anio":"2000", "color":"Amarillo", "kilometros":"12745468", "precio":"2648464", "calificacion":3 },
  { "Foto":"./assets/imagenes/Carro04.jpg", "marca":"Chevrolet", "modelo":"Sail", "anio":"2026", "color":"Morado", "kilometros":"1205616", "precio":"564848", "calificacion":6 },
  { "Foto":"./assets/imagenes/Carro05.jpg", "marca":"Kia", "modelo":"Logan", "anio":"2019", "color":"Rojo", "kilometros":"1265464", "precio":"5156166", "calificacion":9 }
];

getvehiculo(codigo: string){

}

getvehiculoAll(){
  return this.ListaAutos;
}

addvehiculo(vehiculo:any){
  console.log(vehiculo);
  this.ListaAutos.push(vehiculo);
}

deletevehiculo(color:string){
  this.ListaAutos = this.ListaAutos.filter((item) => item.color != color);
  console.log(this.ListaAutos);
}
}