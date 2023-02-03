import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarComponent } from './editar.component';
import { EditarEstudiosComponent } from './editar-estudios/editar-estudios.component';
import { EditarProyectosComponent } from './editar-proyectos/editar-proyectos.component';
import {Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { FormEstudiosComponent } from './editar-estudios/form-estudios/form-estudios.component';
import { FormProyectosComponent } from './editar-proyectos/form-proyectos/form-proyectos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes:Routes=[
  {path:'editar', component:EditarComponent,
children:[
  {path:'form/estudios', component:FormEstudiosComponent},
  {path:'form/add/estudios', component:FormEstudiosComponent},
  {path:'form/proyectos', component:FormProyectosComponent},
  {path:'estudios', component:EditarEstudiosComponent},
  {path:'proyectos', component:EditarProyectosComponent}
]
}
]

@NgModule({
  declarations: [
    FormProyectosComponent,
    FormEstudiosComponent,
    EditarComponent,
    EditarEstudiosComponent,
    EditarProyectosComponent
  ],
  imports: [
  CommonModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule
  ],
  exports:[
    EditarEstudiosComponent
  ]
})
export class EditarModule { }
