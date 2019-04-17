import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportSalesmanComponent } from './sales-report-salesman.component';

describe('SalesReportSalesmanComponent', () => {
  let component: SalesReportSalesmanComponent;
  let fixture: ComponentFixture<SalesReportSalesmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesReportSalesmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReportSalesmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
