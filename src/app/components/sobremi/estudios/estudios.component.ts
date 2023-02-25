import { Component } from '@angular/core';
import { EstudiosService } from 'src/app/services/estudios/estudios.service';
@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent {

estudios:any={};


constructor(private service:EstudiosService){
}

ngOnInit():void{
this.service.getAll().subscribe(estudios=>{
  this.estudios=estudios;
})
}
}
