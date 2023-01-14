import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InicioModule } from './components/inicio/inicio.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, InicioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
