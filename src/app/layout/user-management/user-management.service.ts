import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/index';

const GET_ALL_USERS = `${environment.Config.apiUrl}getAllUsers`;
const CHANGE_USER_STATUS = `${environment.Config.apiUrl}changeUserStatus`;
const GET_PROFILE_BY_ID = `${environment.Config.apiUrl}getProfile`;
const GET_USER_POSTED_RIDES = `${environment.Config.apiUrl}getUserPostedRides`;
const GET_USER_TAKEN_RIDES = `${environment.Config.apiUrl}getUserTakenRides`;
const GET_USER_REQUESTED_RIDES = `${environment.Config.apiUrl}getUserRequestRides`;




@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http : HttpClient) { }

  getAllUsers(){
    return this.http.get(GET_ALL_USERS);
  }

  changeUserStatus(requestBody){
    return this.http.post(CHANGE_USER_STATUS,requestBody);
 }

 getProfileById(userId){
   return this.http.get(`${GET_PROFILE_BY_ID}?userId=${userId}`)
 }

 getUserPostedRides(requestBody){
   return this.http.post(GET_USER_POSTED_RIDES,requestBody);
 }

getUserTakenRides(requestBody){
  return this.http.post(GET_USER_TAKEN_RIDES,requestBody);

}

getUserRequestedRides(requestBody){
  return this.http.post(GET_USER_REQUESTED_RIDES,requestBody);

}

}
