import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';
@Component({
  selector: 'app-form-estudios',
  templateUrl: './form-estudios.component.html',
  styleUrls: ['./form-estudios.component.css'],
})
export class FormEstudiosComponent implements OnInit {
  protected estudio: any;
  protected agregado:boolean=false;
  //Binding para mostrar vista previa del enlace de imagen
  imgUrl: string = '';
  //FormGroup para almacenar validaciones y evitar submit con errores
  editarForm: FormGroup = new FormGroup({
    nombre_institucion: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    nombre_curso: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    fecha_inicio: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
    ]),
    estado_cursado: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    url_logo: new FormControl('', [
      Validators.required,
      Validators.pattern(/^https?:\/\/\S+$/),
    ]),
  });

  //Comprobar si la ruta accedida debe mostrar datos para editar o agregar un curso
  rutaActual: String = this.router.url;
  formCreate: boolean =
    this.rutaActual === '/editar/form/add/estudios' ? true : false;

  //JSON que simula datos de un curso para realizar pruebas en el template
  private cursojson: any;
  private cursoId: number = 0;

  constructor(
    private router: Router,
    private service: EstudiosService,
     routeAct: ActivatedRoute
  ) {
    if (this.formCreate === false) {
      this.cursoId = routeAct.snapshot.params['id'];
     service.getById(this.cursoId).subscribe((estudio) => {
        this.cursojson = estudio;
      let fechaFormateada = moment(this.cursojson.fecha_inicio).format(
        'YYYY-MM-DD'
      );
      this.editarForm
        .get('nombre_institucion')
        ?.setValue(this.cursojson.nombre_institucion);
      this.editarForm
        .get('nombre_curso')
        ?.setValue(this.cursojson.nombre_curso);
      this.editarForm.get('fecha_inicio')?.setValue(fechaFormateada);
      this.editarForm
        .get('estado_cursado')
        ?.setValue(this.cursojson.estado_cursado);
      this.imgUrl = this.cursojson.logoUrl;
      this.editarForm.get('url_logo')?.setValue(this.cursojson.url_logo);
    });
    }
  }

  ngOnInit(): void {}

  guardar() {
    if (this.editarForm.valid) {
      if (this.formCreate === true) {
        this.service
          .add(this.editarForm.value)
          .subscribe((e) =>{
          this.agregado=true;
           this.editarForm.reset();

          setTimeout(()=>{
            this.agregado=false
          }, 4000)
         } );
      } else {
        this.service.update(this.cursoId,this.editarForm.value).subscribe(()=>{
         this.router.navigate(["editar/estudios"]);
        })
      }
    }
  }
}
