import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobremiComponent } from './sobremi.component';
import { EstudiosModule } from './estudios/estudios.module';


@NgModule({
  declarations: [
    SobremiComponent
  ],
  imports: [
    CommonModule, EstudiosModule
  ],
  exports:[SobremiComponent]
})
export class SobremiModule { }
