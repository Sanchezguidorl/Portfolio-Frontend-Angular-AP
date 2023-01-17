import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobremiComponent } from './sobremi.component';
import { EstudiosModule } from './estudios/estudios.module';
import { PresentacioncardComponent } from './presentacioncard/presentacioncard.component';


@NgModule({
  declarations: [
    SobremiComponent,
    PresentacioncardComponent
  ],
  imports: [
    CommonModule, EstudiosModule
  ],
  exports:[SobremiComponent,   PresentacioncardComponent]
})
export class SobremiModule { }
