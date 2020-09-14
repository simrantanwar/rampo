import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { LayoutModule } from './layout/layout.module';
import { LoginnComponent } from './practice/loginn/loginn.component';
import { LoginnModule } from './practice/loginn/loginn.module';


const routes: Routes = [
  
  // {path:'', loadChildren:()=>import('./practice/loginn/loginn.module').then(m=>LoginnModule)},

  {path:'auth', loadChildren:()=>import('./auth/auth.module').then(m=>AuthModule)},
  {path : '' , redirectTo: 'layout' , pathMatch: 'full'},
  {path : 'layout', loadChildren:()=>import('./layout/layout.module').then(m=>LayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
