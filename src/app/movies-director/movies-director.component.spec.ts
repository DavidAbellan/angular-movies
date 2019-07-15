import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDirectorComponent } from './movies-director.component';

describe('MoviesDirectorComponent', () => {
  let component: MoviesDirectorComponent;
  let fixture: ComponentFixture<MoviesDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
