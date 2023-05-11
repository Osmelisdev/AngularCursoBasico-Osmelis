import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaAutosComponent } from './componentes/ListaAutos/ListaAutos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalificacionComponent } from './componentes/calificacion/calificacion.component';
import { InicioComponent } from './autos/inicio/inicio.component';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ListaAutosComponent,
    CalificacionComponent,
    InicioComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "autos", component: ListaAutosComponent },
      { path: "inicio", component:InicioComponent},
      { path: "clientes", component:ClientesComponent}
    ]),
  ],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
