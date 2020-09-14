import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { catchError, tap, finalize } from 'rxjs/operators';
import { of, fromEvent, from, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
@ViewChild('mySidenav',{static:true}) mySidenav : ElementRef;
@ViewChild('ref',{static:true}) ref: ElementRef;
showVal:any;
 isOpen:boolean=false;
 images:Array<any>=[];
  constructor(private _dashboardService :DashboardService) { }

  ngOnInit(): void {
    
   }
}

