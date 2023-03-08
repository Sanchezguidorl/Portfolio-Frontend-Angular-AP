import { Component } from '@angular/core';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent {
  protected estudios: any;
protected loading:boolean=true;
  constructor(private service: EstudiosService) {}

  ngOnInit(): void {
    this.cursosLista();
  }

  cursosLista(): any {

    return this.service.getAll().subscribe((estudios) => {
      this.estudios = estudios;
 setTimeout(() => {
  this.loading=false;
 }, 2000);
    });
  }
}
