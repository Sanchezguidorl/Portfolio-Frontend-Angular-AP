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
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { ModalModule } from 'ngx-bootstrap/modal';

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
  BrowserModule, InicioModule, RouterModule.forRoot(appRoutes), EditarModule,
     FormsModule, HttpClientModule, ModalModule.forRoot()
  ],
  providers:[
{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true
}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
