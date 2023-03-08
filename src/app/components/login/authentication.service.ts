import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Credentials, JwtTokenExpiration } from './models';
import jwtDecode from 'jwt-decode';
@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}
@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  private authenticated = new BehaviorSubject<boolean>(this.getAuth());

  getAuthenticated(): Observable<boolean> {
    return this.authenticated.asObservable();
  }

  login(creds: Credentials) {
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*' });

    return this.http
      .post('https://portfolio-guidosanz.onrender.com/login', creds, {
        headers,
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          const headers = response.headers;
          const bearerToken = headers.get('Authorization');
          const token = bearerToken ? bearerToken.split(' ')[1] : null; // extraer el token del header
          localStorage.setItem('token', JSON.stringify(token));
          this.authenticated.next(true);
          return body;
        }),
        catchError((error: any) => {
          return throwError(() => error);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.authenticated.next(false);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getAuth() {
    let auth: boolean = false;

    if (localStorage.getItem('token') !== null) {
      let token: JwtTokenExpiration = jwtDecode(
        localStorage.getItem('token') ?? ''
      );
      let tokenExp: Date = new Date(token.exp * 1000);
      auth = tokenExp < new Date() ? false : true;
    }
    return auth;
  }
}
