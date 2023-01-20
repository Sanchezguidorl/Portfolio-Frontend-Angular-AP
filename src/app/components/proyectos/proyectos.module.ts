import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { PjRealizadosComponent } from './pj-realizados/pj-realizados.component';
import { ListaProyectosComponent } from './lista-proyectos/lista-proyectos.component';



@NgModule({
  declarations: [
    ProyectosComponent,
    PjRealizadosComponent,
    ListaProyectosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[PjRealizadosComponent, ListaProyectosComponent]
})
export class ProyectosModule { }
