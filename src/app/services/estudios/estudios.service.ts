import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudio } from './../../components/login/models';

@Injectable({
  providedIn: 'root',
})
export class EstudiosService {
  private API_GET: string = 'https://portfolio-guidosanz.onrender.com/api/estudios/lista';

  private API_GETBYID: string = 'https://portfolio-guidosanz.onrender.com/api/estudios/';

  private API_POST: string = 'https://portfolio-guidosanz.onrender.com/api/estudios/agregar';

  private API_PUT: string = 'https://portfolio-guidosanz.onrender.com/api/estudios/editar/';

  private API_DELETE: string = 'https://portfolio-guidosanz.onrender.com/api/estudios/eliminar/';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<any> {
    return this.http.get(this.API_GET);
  }

  public getById(id: number): Observable<any> {
    return this.http.get(this.API_GETBYID + id);
  }
  public add(estudio: Estudio): Observable<any> {
    return this.http.post(this.API_POST, estudio);
  }
  public update(id: number,data:Estudio): Observable<any> {
    return this.http.put(this.API_PUT + id,data);
  }
  public delete(id: number): Observable<any> {
    return this.http.delete(this.API_DELETE + id);
  }
}
