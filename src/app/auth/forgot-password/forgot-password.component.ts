import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { catchError, finalize, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
forgotPasswordForm : FormGroup;
showDiv:boolean =false;
showLoader: boolean =false;
  constructor(private _fb : FormBuilder, private _authService : AuthService) { }

 
  ngOnInit(): void {
    this.initForm();
  }
  initForm(){
    this.forgotPasswordForm=this._fb.group({
email: this._fb.control('',[Validators.email, Validators.required])
    })
  }

forgetPassword(){
  if(this.forgotPasswordForm.invalid){
return
  }
  this.showLoader=true;
this._authService.forgotPassword({email:this.forgotPasswordForm.value.email}).pipe(
  catchError((err)=>of(err)),
  tap(resp=>{

if(resp.success){
this.showDiv=true;
}
  }),finalize(()=>{
this.showLoader= false;
  })
).subscribe();
}

}
