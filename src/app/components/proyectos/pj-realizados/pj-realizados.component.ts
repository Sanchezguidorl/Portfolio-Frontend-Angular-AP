import { Component } from '@angular/core';
import { ProyectosService } from './../../../services/proyectos/proyectos.service';

@Component({
  selector: 'app-pj-realizados',
  templateUrl: './pj-realizados.component.html',
  styleUrls: ['./pj-realizados.component.css']
})
export class PjRealizadosComponent {

protected proyectos:any={};
constructor(private service:ProyectosService){
}

ngOnInit():void{
this.service.getAll().subscribe(proyecto=>{
  this.proyectos=proyecto;
})
}

}
