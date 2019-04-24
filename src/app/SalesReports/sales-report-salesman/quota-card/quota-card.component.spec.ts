import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotaCardComponent } from './quota-card.component';

describe('QuotaCardComponent', () => {
  let component: QuotaCardComponent;
  let fixture: ComponentFixture<QuotaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
