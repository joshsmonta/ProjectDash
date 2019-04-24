import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpentCardComponent } from './time-spent-card.component';

describe('TimeSpentCardComponent', () => {
  let component: TimeSpentCardComponent;
  let fixture: ComponentFixture<TimeSpentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSpentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSpentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
