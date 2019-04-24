import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjpcomCardComponent } from './pjpcom-card.component';

describe('PjpcomCardComponent', () => {
  let component: PjpcomCardComponent;
  let fixture: ComponentFixture<PjpcomCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjpcomCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjpcomCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
