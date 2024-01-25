import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentModifiedComponent } from './ng-content-modified.component';

describe('NgContentModifiedComponent', () => {
  let component: NgContentModifiedComponent;
  let fixture: ComponentFixture<NgContentModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentModifiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContentModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
