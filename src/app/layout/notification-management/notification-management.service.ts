import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/index';
const SEND_NOTIFICATION = `${environment.Config.apiUrl}sendNotificationsToDriverAndRiders`
@Injectable({
  providedIn: 'root'
})
export class NotificationManagementService {

  constructor(private http : HttpClient) { }

  sendNotification(requestBody){
    return this.http.post(SEND_NOTIFICATION,requestBody);
  }
}
