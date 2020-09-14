import { Component, OnInit } from '@angular/core';
import { LoginnService } from '../loginn.service';
import { catchError, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  constructor(private _loginService  : LoginnService) { }

  ngOnInit(): void {
this.getBooks();

  }
getBooks(){
  this._loginService.getBooks().pipe(
    catchError((err)=>of(err)),
    tap(resp=>{
      // console.log(resp);
      
    }),finalize(()=>{

    })
  ).subscribe();
}

}

