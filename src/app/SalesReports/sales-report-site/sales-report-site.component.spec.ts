import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportSiteComponent } from './sales-report-site.component';

describe('SalesReportSiteComponent', () => {
  let component: SalesReportSiteComponent;
  let fixture: ComponentFixture<SalesReportSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesReportSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesReportSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
