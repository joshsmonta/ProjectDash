import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportFssComponent } from './sales-report-fss.component';

describe('SalesReportFssComponent', () => {
  let component: SalesReportFssComponent;
  let fixture: ComponentFixture<SalesReportFssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesReportFssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReportFssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
