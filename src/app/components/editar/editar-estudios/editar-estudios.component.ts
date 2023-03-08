import { Component, OnInit } from '@angular/core';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css'],
})
export class EditarEstudiosComponent implements OnInit {
  protected eliminado: boolean = false;
  protected estudios: any;
  protected loading: boolean=true;
  constructor(private service: EstudiosService) {}

  ngOnInit(): void {
    this.traerTodos();
  }
  traerTodos() {
     this.service.getAll().subscribe((estudio) => {
      this.estudios = estudio;
      setTimeout(()=>{
        this.loading=false;
        this.eliminado=false;
      },1000)
    });

  }


  eliminar(id: number) {
    this.service.delete(id).subscribe((response: boolean) => {
     if(response){
      this.eliminado=true;
     }
    });
  }
}
