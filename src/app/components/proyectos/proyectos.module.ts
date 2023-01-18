import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { PjRealizadosComponent } from './pj-realizados/pj-realizados.component';



@NgModule({
  declarations: [
    ProyectosComponent,
    PjRealizadosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProyectosModule { }
