import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsManagementComponent } from './payments-management.component';

describe('PaymentsManagementComponent', () => {
  let component: PaymentsManagementComponent;
  let fixture: ComponentFixture<PaymentsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
