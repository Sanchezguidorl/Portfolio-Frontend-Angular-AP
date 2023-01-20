import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { SobremiModule } from '../sobremi/sobremi.module';
import { SkillsComponent } from '../skills/skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EstudiosModule } from '../sobremi/estudios/estudios.module';
import { ProyectosModule } from '../proyectos/proyectos.module';


@NgModule({
    declarations: [InicioComponent, SkillsComponent],
    imports: [
    CommonModule, SobremiModule, NgCircleProgressModule.forRoot({}), EstudiosModule,ProyectosModule
    ],
    exports:[InicioComponent],
    providers:[]
})
export class InicioModule { }
