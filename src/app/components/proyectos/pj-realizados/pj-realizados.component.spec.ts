import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PjRealizadosComponent } from './pj-realizados.component';

describe('PjRealizadosComponent', () => {
  let component: PjRealizadosComponent;
  let fixture: ComponentFixture<PjRealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PjRealizadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PjRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
