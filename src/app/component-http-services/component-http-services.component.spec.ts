import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHttpServicesComponent } from './component-http-services.component';

describe('ComponentHttpServicesComponent', () => {
  let component: ComponentHttpServicesComponent;
  let fixture: ComponentFixture<ComponentHttpServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentHttpServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentHttpServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
