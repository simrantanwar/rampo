import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { catchError, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  isShow: boolean = false;
  constructor(private _authService: AuthService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
this.verifyResetPassword(params.token);
console.log(params.token);

    })
    
  }
  showPassword() {
    this.isShow = !this.isShow;
  }
  verifyResetPassword(token) {
    let headers=new HttpHeaders();
    headers.append('token',token)
    
    this._authService.verifyResetPassword(headers).pipe(
      catchError((err) => of(err)),
      tap((resp: any) => {
        console.log(resp);

      }), finalize(() => {

      })
    ).subscribe();
  }
}
