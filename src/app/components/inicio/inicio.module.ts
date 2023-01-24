import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { SobremiModule } from '../sobremi/sobremi.module';
import { SkillsComponent } from '../skills/skills.component';
import { EstudiosModule } from '../sobremi/estudios/estudios.module';
import { ProyectosModule } from '../proyectos/proyectos.module';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
    declarations: [InicioComponent, SkillsComponent],
    imports: [
CommonModule, SobremiModule, EstudiosModule,ProyectosModule, NgCircleProgressModule.forRoot({})
    ],
    exports:[InicioComponent],
    providers:[]
})
export class InicioModule { }
