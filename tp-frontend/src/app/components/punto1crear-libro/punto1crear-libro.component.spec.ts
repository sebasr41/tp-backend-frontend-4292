import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto1crearLibroComponent } from './punto1crear-libro.component';

describe('Punto1crearLibroComponent', () => {
  let component: Punto1crearLibroComponent;
  let fixture: ComponentFixture<Punto1crearLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Punto1crearLibroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Punto1crearLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
