import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesYearChartComponent } from './sales-year-chart.component';

describe('SalesYearChartComponent', () => {
  let component: SalesYearChartComponent;
  let fixture: ComponentFixture<SalesYearChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesYearChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesYearChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
