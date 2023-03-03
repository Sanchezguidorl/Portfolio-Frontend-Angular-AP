import { TestBed } from '@angular/core/testing';

import { MostrarProyectosService } from './mostrar-proyectos.service';

describe('MostrarProyectosService', () => {
  let service: MostrarProyectosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarProyectosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
