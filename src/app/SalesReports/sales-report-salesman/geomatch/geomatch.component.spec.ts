import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeomatchComponent } from './geomatch.component';

describe('GeomatchComponent', () => {
  let component: GeomatchComponent;
  let fixture: ComponentFixture<GeomatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeomatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeomatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
