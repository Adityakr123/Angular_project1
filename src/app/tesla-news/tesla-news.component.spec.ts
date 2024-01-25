import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeslaNewsComponent } from './tesla-news.component';

describe('TeslaNewsComponent', () => {
  let component: TeslaNewsComponent;
  let fixture: ComponentFixture<TeslaNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeslaNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeslaNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
