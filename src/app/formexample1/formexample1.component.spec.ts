import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formexample1Component } from './formexample1.component';

describe('Formexample1Component', () => {
  let component: Formexample1Component;
  let fixture: ComponentFixture<Formexample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Formexample1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formexample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
