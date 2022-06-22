import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3tablaComponent } from './punto3tabla.component';

describe('Punto3tablaComponent', () => {
  let component: Punto3tablaComponent;
  let fixture: ComponentFixture<Punto3tablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto3tablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto3tablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
