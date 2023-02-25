import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudio } from './../../components/login/models';

@Injectable({
  providedIn: 'root',
})
export class EstudiosService {
  private API_GET: string = 'http://localhost:8080/api/estudios/lista';

  private API_GETBYID: string = 'http://localhost:8080/api/estudios/';

  private API_POST: string = 'http://localhost:8080/api/estudios/agregar';

  private API_PUT: string = 'http://localhost:8080/api/estudios/editar/';

  private API_DELETE: string = 'http://localhost:8080/api/estudios/eliminar/';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(this.API_GET);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(this.API_GETBYID + id);
  }
  public add(estudio:Estudio): Observable<any> {
    return this.http.get(this.API_POST);
  }
  public update(id: number): Observable<any> {
    return this.http.get(this.API_PUT + id);
  }
  public delete(id: number): Observable<any> {
    return this.http.get(this.API_DELETE + id);
  }
}
