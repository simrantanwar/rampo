import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, Router, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AuthService } from './auth.service';

const routes: Routes=[
{path:'',redirectTo:'login', pathMatch: 'full'},
{path:'login',component:LoginComponent},
{path: 'forgot-password' , component: ForgotPasswordComponent},
{path:'reset-password', component: ResetPasswordComponent}
]

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    
  ],
  exports:[],
  providers:[AuthService]
})
export class AuthModule { }
