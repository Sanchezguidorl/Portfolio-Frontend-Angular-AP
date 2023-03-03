import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MostrarProyectosService {

  constructor() {

  }
  private mostrarSubject = new BehaviorSubject<boolean>(false);


  mostrarProductos(bool: boolean) {
    this.mostrarSubject.next(bool);
  }

  getMostrar() {
    return this.mostrarSubject.asObservable();
}
}
