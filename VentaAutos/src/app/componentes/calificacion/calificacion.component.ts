import { AfterViewInit, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() calificacion:number=0;
  @Output() retorno = new EventEmitter<any>();

  lista:any[] = [];

  ngOnInit() {
    for(let i=0; i<this.calificacion; i++){
      this.lista.push(1);
    }
    
  }
  
  ngAfterViewInit(){

  }
    
  
  mostrarcalificacion(){
    this.retorno.emit(this.calificacion);
  }
}
