import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BaseComponent } from './base/base.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PaymentsManagementComponent } from './payments-management/payments-management.component';
import { NotificationManagementComponent } from './notification-management/notification-management.component';
import { RideManagementComponent } from './ride-management/ride-management.component';
import { CouponManagementComponent } from './coupon-management/coupon-management.component';
import { ReportsManagementComponent } from './reports-management/reports-management.component';
import { PayoutComponent } from './payout/payout.component';
import { UserManagementService } from './user-management/user-management.service';
import { UserDetailsComponent } from './user-management/user-details/user-details.component';
import { MessageService } from 'primeng/api';
import { _CoalescedStyleScheduler } from '@angular/cdk/table';


@NgModule({
  declarations: [
    BaseComponent,
    DashboardComponent,
    UserManagementComponent,
    PaymentsManagementComponent,
    NotificationManagementComponent,
    RideManagementComponent,
    CouponManagementComponent,
    ReportsManagementComponent,
    PayoutComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  providers:[UserManagementService, MessageService, _CoalescedStyleScheduler]
})
export class LayoutModule { }
