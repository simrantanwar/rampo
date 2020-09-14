import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';
import {tap,finalize,catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShow: boolean = false;
  showLoader:boolean=false;
  loginForm: FormGroup;
  constructor(private _fb: FormBuilder, private _authService: AuthService, private _router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  showPassword() {
    this.isShow = !this.isShow;
  }

  initForm() {
    this.loginForm = this._fb.group({
      email: this._fb.control('', [Validators.email, Validators.required]),
      password: this._fb.control('', Validators.required)
    })
  }

  login() {
    if(this.loginForm.invalid){
      return
    }
    this.showLoader=true;
    let requestBody = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      }
    this._authService.login(requestBody).pipe(
      catchError((err) => of(err)),
      tap(resp => {
        if(resp.success){
          this._authService.saveSessionInLocal(resp.result);
          this._router.navigate(['/layout'])

        }

      }), finalize(() => {
        this.showLoader=false;

      })
    ).subscribe();

  }
}
