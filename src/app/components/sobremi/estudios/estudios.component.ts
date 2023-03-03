import { Component } from '@angular/core';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent {
  protected estudios: any;

  constructor(private service: EstudiosService) {}

  ngOnInit(): void {
    this.cursosLista();
  }

  cursosLista(): any {
    return this.service.getAll().subscribe((estudios) => {
      this.estudios = estudios;
    });
  }
}
