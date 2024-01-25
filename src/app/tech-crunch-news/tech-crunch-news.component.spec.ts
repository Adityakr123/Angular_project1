import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCrunchNewsComponent } from './tech-crunch-news.component';

describe('TechCrunchNewsComponent', () => {
  let component: TechCrunchNewsComponent;
  let fixture: ComponentFixture<TechCrunchNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechCrunchNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechCrunchNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
