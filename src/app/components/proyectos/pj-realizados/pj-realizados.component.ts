import { Component } from '@angular/core';

@Component({
  selector: 'app-pj-realizados',
  templateUrl: './pj-realizados.component.html',
  styleUrls: ['./pj-realizados.component.css']
})
export class PjRealizadosComponent {

public projects:Array<any>=[
                      {id:2,
                        nombre:"Castillo inflable",
                       descripcion:"es un proyecto de castillo inflable",
                       fecha:"12/05/2020"},
                      {id:3,
                        nombre:"Utos seguros",
                       descripcion:"es un proyecto de una pagina de seguros",
                       fecha:"12/05/2020"}
                      ]


}
