import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../components/login/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth:AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

const token=this.auth.getToken();
if(token){
  const cloned=request.clone({
    headers: request.headers.set('Authorization','Bearer '+token.replace(/"/g,''))
  });
  return next.handle(cloned);
}
    return next.handle(request);
  }
}
