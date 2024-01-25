import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileComponentComponent } from './github-profile-component.component';

describe('GithubProfileComponentComponent', () => {
  let component: GithubProfileComponentComponent;
  let fixture: ComponentFixture<GithubProfileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubProfileComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
