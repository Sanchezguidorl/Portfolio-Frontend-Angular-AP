import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proyecto } from 'src/app/components/login/models';

@Injectable({
  providedIn: 'root',
})
export class ProyectosService {
  private API_GET: string = 'http://localhost:8080/api/proyectos/lista';

  private API_POST: string = 'http://localhost:8080/api/proyectos/agregar';

  private API_PUT: string = 'http://localhost:8080/api/proyectos/editar/';

  private API_DELETE: string = 'http://localhost:8080/api/proyectos/eliminar/';

  private API_GET_BY_ID: string = 'http://localhost:8080/api/proyectos/';

  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get(this.API_GET);
  }
  getById(id: number): Observable<any> {
    return this.http.get(this.API_GET_BY_ID + id);
  }
  create(proyecto: Proyecto): Observable<any> {
    return this.http.post(this.API_POST, proyecto);
  }
  update(id: number, datos: Proyecto): Observable<any> {
    return this.http.put(this.API_PUT + id, datos);
  }
  delete(id:number):Observable<any>{
return this.http.delete(this.API_DELETE+id);
  }
}
