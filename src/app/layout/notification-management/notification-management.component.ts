import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { NotificationManagementService } from './notification-management.service';
import { catchError, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-notification-management',
  templateUrl: './notification-management.component.html',
  styleUrls: ['./notification-management.component.css']
})
export class NotificationManagementComponent implements OnInit {
  notifyForm: FormGroup;
  sendTo = 0;
  userId:any=null;
  constructor(private _fb: FormBuilder,private route: ActivatedRoute,
    private _notificationManagementService : NotificationManagementService) { }

  ngOnInit(): void {
this.route.queryParams.subscribe((params:Params)=>{
  if(params.userId){
    this.userId=params.userId;
  }
})
    this.initForm();

  }

  initForm() {
    this.notifyForm = this._fb.group({
      notificationBody: this._fb.control('', [Validators.required]),
      sms: this._fb.control(false),
      inApp: this._fb.control(false),
      email: this._fb.control(false),
      rider: this._fb.control(false),
      driver: this._fb.control(false)

    })

  }


  checkUserType() {
   
    if (this.notifyForm.value.rider == true && this.notifyForm.value.driver == true) {
      this.sendTo = 3;
    }
    else if (this.notifyForm.value.driver == true) {
      this.sendTo = 2;
    }
    else if (this.notifyForm.value.rider == true) {
      this.sendTo = 1;
    }
    else {
      this.sendTo = 0;
    }
  }
  sendNotification(){
    let requestBody={
      sms:this.notifyForm.value.sms == true ? 1 : 0,
      inApp:this.notifyForm.value.inApp  == true ? 1 : 0,
      email:this.notifyForm.value.email  == true ? 1 : 0,
      sendTo:this.sendTo,
      notification_body:this.notifyForm.value.notificationBody,
      userId:this.userId
    }
    this._notificationManagementService.sendNotification(requestBody).pipe(
      catchError((err)=>of(err)),
      tap(resp=>{
console.log(resp);

      }),finalize(()=>{

      })
    ).subscribe();
    
  }

  resetForm(){
    this.initForm();
  }
}

