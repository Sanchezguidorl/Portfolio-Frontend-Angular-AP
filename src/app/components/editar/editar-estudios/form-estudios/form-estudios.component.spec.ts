import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstudiosComponent } from './form-estudios.component';

describe('FormEstudiosComponent', () => {
  let component: FormEstudiosComponent;
  let fixture: ComponentFixture<FormEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEstudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
