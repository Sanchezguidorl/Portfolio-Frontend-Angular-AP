import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProyectosService } from './../../../services/proyectos/proyectos.service';


@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css'],
})
export class EditarProyectosComponent implements OnInit{
  protected proyectos: any;
  protected eliminado: boolean = false;


  constructor(
    private service: ProyectosService,
    private cdetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
this.getAll();
  }

  getAll():void{
    this.service.getAll().subscribe(e=>this.proyectos=e);
setTimeout(()=>{
  this.eliminado=false;
},2000)
  }

  eliminar(id: number): void {
    this.service.delete(id).subscribe((response: boolean) => {
      if (response) {
        this.eliminado = true;
      } else {
        console.log('Ha ocurrido un error, el proyecto no pudo ser eliminado');
      }
    });
  }
}
