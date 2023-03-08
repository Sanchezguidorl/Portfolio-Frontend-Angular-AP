import { Component, OnInit } from '@angular/core';
import { PjRealizadosComponent } from './../pj-realizados/pj-realizados.component';
import { MostrarProyectosService } from './../../../services/mostrar-proyectos.service';

@Component({
  selector: 'app-lista-proyectos',
  templateUrl: './lista-proyectos.component.html',
  styleUrls: ['./lista-proyectos.component.css']
})
export class ListaProyectosComponent implements OnInit{
protected mostrar=false;
protected proyectos:any;
constructor(private service:MostrarProyectosService){

}
ngOnInit(){
this.service.getMostrar().subscribe((mostrar)=>this.mostrar=mostrar)
}
mostrarMas(bool:boolean):void{
  this.service.mostrarProductos(bool);
}


}
