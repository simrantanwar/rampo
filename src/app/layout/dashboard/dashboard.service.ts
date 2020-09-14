import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const IMAGE='assets/media/files.json';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

}
