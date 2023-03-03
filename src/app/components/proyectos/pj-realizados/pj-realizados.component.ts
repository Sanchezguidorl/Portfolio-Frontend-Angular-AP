import { Component, OnInit } from '@angular/core';
import { ProyectosService } from './../../../services/proyectos/proyectos.service';
import { MostrarProyectosService } from './../../../services/mostrar-proyectos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pj-realizados',
  templateUrl: './pj-realizados.component.html',
  styleUrls: ['./pj-realizados.component.css']
})
export class PjRealizadosComponent implements OnInit{
protected mostrarTodos=false;
protected proyectos:any;
constructor(private service:ProyectosService, private serviceMostrar:MostrarProyectosService){
}

ngOnInit():void{
this.service.getAll().subscribe(proyecto=>{
  this.proyectos=proyecto;
});

this.serviceMostrar.getMostrar().subscribe((mostrar)=>this.mostrarTodos=mostrar);
}


}
