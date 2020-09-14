import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
loader=new BehaviorSubject(false);
loaderState=this.loader.asObservable();
  constructor() { }

loaderValue(value){
this.loader.next(value);
}

}
