import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginnService } from '../loginn.service';
import { catchError, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {
loginForm: FormGroup;
  constructor(private _fb : FormBuilder, private _loginnService : LoginnService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
this.loginForm=this._fb.group({
  email:this._fb.control(''),
  password:this._fb.control(''),

})
  }

  // loginn(){
  //   let requestBody={
  //     identifier:this.loginForm.value.email,
  //     password: this.loginForm.value.password
  //   }
  //   this._loginnService.loginn(requestBody).pipe(
  //     catchError((err)=>of(err)),
  //     tap(resp=>{
  //       console.log(resp);
        
  //     }),finalize(()=>{

  //     })
  //   ).subscribe();
  // }
}
