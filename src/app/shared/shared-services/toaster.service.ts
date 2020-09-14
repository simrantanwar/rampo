import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
toast =new BehaviorSubject({});
toastState = this.toast.asObservable();
  constructor() { }

  toaster(value){
this.toast.next(value);
  }
}
