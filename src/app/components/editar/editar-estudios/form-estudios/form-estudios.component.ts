import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
@Component({
  selector: 'app-form-estudios',
  templateUrl: './form-estudios.component.html',
  styleUrls: ['./form-estudios.component.css']
})
export class FormEstudiosComponent {

//Binding para mostrar vista previa del enlace de imagen
  imgUrl:string='';


//FormGroup para almacenar validaciones y evitar submit con errores
editarForm:FormGroup= new FormGroup({
instituto: new FormControl('',[Validators.required, Validators.minLength(4)]),
curso: new FormControl('',[Validators.required, Validators.minLength(4)]),
fecha: new FormControl('',[Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]),
estado: new FormControl('',[Validators.required,Validators.minLength(4)]),
url: new FormControl('',[Validators.required,Validators.pattern(/^https?:\/\/\S+$/)])
});

//Comprobar si la ruta accedida debe mostrar datos para editar o agregar un curso
rutaActual:String= this.router.url;
formCreate:boolean=this.rutaActual==="/editar/form/add/estudios"? true: false;

//JSON que simula datos de un curso para realizar pruebas en el template
cursojson={
instituto:"Udemy", curso:"Master en Angular y bases de datos con JAVA",
 fecha:"2020-03-01", estado:"Finalizado", logoUrl:"https://play-lh.googleusercontent.com/dsCkmJE2Fa8IjyXERAcwc5YeQ8_NvbZ4_OI8LgqyjILpXUfS5YhEcnAMajKPrZI-og"
}

fechaFormateada=moment(this.cursojson.fecha).format("YYYY-MM-DD");
 constructor(private router: Router) {
  if(!this.formCreate){
    this.editarForm.get('instituto')?.setValue(this.cursojson.instituto);
    this.editarForm.get('curso')?.setValue(this.cursojson.curso);
    this.editarForm.get('fecha')?.setValue(this.fechaFormateada);
    this.editarForm.get('estado')?.setValue(this.cursojson.estado);
    this.imgUrl=this.cursojson.logoUrl;
    this.editarForm.get('url')?.setValue(this.cursojson.logoUrl);
  }
 }



enviarForm(){

if(this.editarForm.valid)
{
alert(this.editarForm.value)
}

}



}
