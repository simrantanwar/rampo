import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/index';
import { LocalService } from '../shared/shared-services/local.service';
import { Observable } from 'rxjs';
const LOGIN_URL = `${environment.Config.apiUrl}login`;
const FORGET_PASSWORD = `${environment.Config.apiUrl}forgotPassword`;
const VERIFY_RESET_PASSWORD = `${environment.Config.apiUrl}verifyResetPasswordToken`;


@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private _localService : LocalService) { }

  login(requestBody) {
   return this.http.post(LOGIN_URL, requestBody);
  }

  saveSessionInLocal(response){
     this._localService.setInLocal('authToken',response.token);
     this._localService.setInLocal('user', response.username);
     this._localService.setInLocal('imageUrl', response.imageUrl);

  }

  removeSessionFromLocal(){
    this._localService.removeFromLocal('authToken');
    this._localService.removeFromLocal('user');
    this._localService.removeFromLocal('imageUrl');
  }

  forgotPassword(requestBody){
    return this.http.post(FORGET_PASSWORD,requestBody)
  }

  verifyResetPassword(header: HttpHeaders) : Observable<any>{
    return this.http.get(VERIFY_RESET_PASSWORD,{headers:header})
  }
}
