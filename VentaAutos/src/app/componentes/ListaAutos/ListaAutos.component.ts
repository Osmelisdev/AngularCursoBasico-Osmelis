import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioVehiculoService } from 'src/ServicioVehiculo/ServicioVehiculo.service';


@Component({
  selector: 'app-ListaAutos',
  templateUrl: './ListaAutos.component.html',
  styleUrls: ['./ListaAutos.component.css']
})
export class ListaAutosComponent implements OnInit {
[x: string]: any;

  
  constructor(private formBuilder: FormBuilder, 
    private ServicioVehiculo: ServicioVehiculoService){

    }
   
  
  titulo:string = "Lista de Vehiculos";
  listaAutos:any[] = [];
  muestraImagen: boolean  = false

 formularioVehiculo!: FormGroup;
  
  ngOnInit() {
    this.formularioVehiculo = this.formBuilder.group({
      "marca": [null],
      "modelo": [null],
      "anio": [null],
      "color": [null],
      "kilometros": [null],
      "precio": [null],
      "calificacion": [null]
    })
    
    this.listaAutos = this.ServicioVehiculo.getvehiculoAll();
  
  };


  toggleImage(): void{
    this.muestraImagen = !this.muestraImagen;
  }


  nuevovehiculo(){
    
    this.formularioVehiculo.controls['marca'].setValue('Chery');
    this.formularioVehiculo.controls['modelo'].setValue('Practivan');
    this.formularioVehiculo.controls['anio'].setValue('2021');
    this.formularioVehiculo.controls['color'].setValue('negro');
    this.formularioVehiculo.controls['kilometros'].setValue('125161');
    this.formularioVehiculo.controls['precio'].setValue('5654');
    this.formularioVehiculo.controls['calificacion'].setValue('5');

    console.log(this.formularioVehiculo.value);

    this.ServicioVehiculo.addvehiculo({...this.formularioVehiculo.value});
    //this.listaAutos = this.ServicioVehiculo.getvehiculoAll();
    

  }

    eliminarvehiculo(vehiculo:any){
      this.ServicioVehiculo.deletevehiculo(vehiculo.color);
      this.listaAutos = this.ServicioVehiculo.getvehiculoAll();
    }

    mostrar(calificacion:any){
      alert(calificacion);
    }

  
}
