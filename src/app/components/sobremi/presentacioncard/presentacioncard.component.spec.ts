import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentacioncardComponent } from './presentacioncard.component';

describe('PresentacioncardComponent', () => {
  let component: PresentacioncardComponent;
  let fixture: ComponentFixture<PresentacioncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentacioncardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentacioncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
