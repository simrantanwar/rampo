import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeFormatService {

  constructor() { }

dateTimeFormat(date){
  let newDate= new Date(date);
  return newDate ? newDate.toLocaleDateString() : 'N/A';
}

}
