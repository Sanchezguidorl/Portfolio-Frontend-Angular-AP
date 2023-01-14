import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { SobremiModule } from '../sobremi/sobremi.module';


@NgModule({
    declarations: [InicioComponent],
    imports: [
        CommonModule, SobremiModule
    ],
    exports:[InicioComponent],
    providers:[]
})
export class InicioModule { }
