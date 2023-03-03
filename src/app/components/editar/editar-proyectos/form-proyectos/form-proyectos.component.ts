import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ProyectosService } from './../../../../services/proyectos/proyectos.service';

@Component({
  selector: 'app-form-proyectos',
  templateUrl: './form-proyectos.component.html',
  styleUrls: ['./form-proyectos.component.css'],
})
export class FormProyectosComponent {
  protected proyectojson: any;
 protected proyectoId: number = 0;
 protected agregado:boolean=false;
  formCreate: boolean =
    this.route.url === '/editar/form/add/proyectos' ? true : false;
  imgUrl: string = '';

  editarForm: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
    url_proyecto: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https?:\/\/\S+$/),Validators.maxLength(250)
    ]),
    fecha_creacion: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
    ]),
    descripcion: new FormControl('', [
      Validators.required,
      Validators.minLength(20),
    ]),
    url_miniatura: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https?:\/\/\S+$/),
    ]),
  });

  constructor(
    private route: Router,
    routeAct: ActivatedRoute,
    private service: ProyectosService
  ) {
    if (this.formCreate === false) {
      this.proyectoId = routeAct.snapshot.params['id'];

      service.getById(this.proyectoId).subscribe((proyecto) => {
        this.proyectojson = proyecto;
        console.log(this.proyectojson);
        this.editarForm.get('nombre')?.setValue(this.proyectojson.nombre);
        this.editarForm
          .get('url_proyecto')
          ?.setValue(this.proyectojson.url_proyecto);
        this.editarForm
          .get('fecha_creacion')
          ?.setValue(
            moment(this.proyectojson.fecha_creacion).format('YYYY-MM-DD')
          );
        this.editarForm
          .get('descripcion')
          ?.setValue(this.proyectojson.descripcion);
        this.imgUrl = this.proyectojson.urlMin;
        this.editarForm
          .get('url_miniatura')
          ?.setValue(this.proyectojson.url_miniatura);
      });
    }
  }

  ngOnInit(): void {}

  guardar(): void {
    if (this.formCreate === true) {
      this.service.create(this.editarForm.value).subscribe((arg) => {
        this.agregado=true;
        this.editarForm.reset();
       setTimeout(()=>{
         this.agregado=false
       }, 4000)
      });
    } else {
      this.service
        .update(this.proyectoId, this.editarForm.value)
        .subscribe((arg) => {
          this.route.navigate(['/editar/proyectos']);
        });
    }
  }
}
