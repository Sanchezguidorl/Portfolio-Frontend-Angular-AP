import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioModule } from './components/inicio/inicio.module';
import {Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { EditarModule } from './components/editar/editar.module';

const appRoutes:Routes=[
{path:'', component:InicioComponent},
{path:'login', component:LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, InicioModule, RouterModule.forRoot(appRoutes), EditarModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
