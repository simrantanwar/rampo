import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const LOGIN_URL="https://testapi.techcellence.com/auth/local";
const GET_BOOKS="https://testapi.techcellence.com/books";
@Injectable({
  providedIn: 'root'
})
export class LoginnService {

  constructor(private http : HttpClient) { }

  loginn(requestBody){
    return this.http.post(LOGIN_URL,requestBody)
 
  }

getBooks(){
  return this.http.get(GET_BOOKS)
}

}

