import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LocalService } from './local.service';


@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private _router : Router, private _localService: LocalService) { }

  intercept(
    req: HttpRequest<any>, 
    next: HttpHandler
  ): Observable<HttpEvent<any>>{

    req=req.clone({
      setHeaders:{
        // Authorization: `${localStorage.getItem('token')}`
      	Authorization: `Bearer ${localStorage.getItem('authToken')}`,
				'Content-Type': `application/json`,

      
      }
    });

    return next.handle(req).pipe(
      tap(event=>{
        if(event instanceof HttpResponse){

        }
      },
      error=>{
        if(error.status==401){
          this._router.navigate(['/login'])
        }
      })
    );
  }
}
