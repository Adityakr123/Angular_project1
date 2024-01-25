import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdityaComponent } from './aditya.component';

describe('AdityaComponent', () => {
  let component: AdityaComponent;
  let fixture: ComponentFixture<AdityaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdityaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdityaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
