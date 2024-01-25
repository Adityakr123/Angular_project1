import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallstreetNewsComponent } from './wallstreet-news.component';

describe('WallstreetNewsComponent', () => {
  let component: WallstreetNewsComponent;
  let fixture: ComponentFixture<WallstreetNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallstreetNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WallstreetNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
