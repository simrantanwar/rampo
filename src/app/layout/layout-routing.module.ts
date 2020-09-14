import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { PaymentsManagementComponent } from './payments-management/payments-management.component';
import { NotificationManagementComponent } from './notification-management/notification-management.component';
import { RideManagementComponent } from './ride-management/ride-management.component';
import { CouponManagementComponent } from './coupon-management/coupon-management.component';
import { ReportsManagementComponent } from './reports-management/reports-management.component';
import { PayoutComponent } from './payout/payout.component';
import { UserDetailsComponent } from './user-management/user-details/user-details.component';

const routes:Routes=[
{path:'',component:BaseComponent,
children : [
  {path: '', redirectTo:'dashboard',pathMatch:'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path : 'user-management'  , data: { breadcrumb: 'User Management'},
children:[
  {path : '' , component : UserManagementComponent},
{path:'user-details' , component:UserDetailsComponent, data: { breadcrumb: 'User Details'}}
]},
  {path : 'payments-management', component : PaymentsManagementComponent},
  {path : 'notification-management' , component : NotificationManagementComponent, data: { breadcrumb: 'Notification Management'}},
  {path : 'ride-management', component: RideManagementComponent},
  {path : 'coupon-management', component: CouponManagementComponent},
  {path : 'reports-management', component: ReportsManagementComponent},
  {path : 'payout', component: PayoutComponent},

]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class LayoutRoutingModule { }
