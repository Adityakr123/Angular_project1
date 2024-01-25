import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleNewsComponent } from './apple-news.component';

describe('AppleNewsComponent', () => {
  let component: AppleNewsComponent;
  let fixture: ComponentFixture<AppleNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppleNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
