import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacciontablaComponent } from './transacciontabla.component';

describe('TransacciontablaComponent', () => {
  let component: TransacciontablaComponent;
  let fixture: ComponentFixture<TransacciontablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransacciontablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacciontablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
