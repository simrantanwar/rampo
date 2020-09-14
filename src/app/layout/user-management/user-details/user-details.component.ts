import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute, Params } from '@angular/router';
import { UserManagementService } from '../user-management.service';
import { catchError, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoaderService } from 'src/app/shared/shared-services/loader.service';
import { ToasterService } from 'src/app/shared/shared-services/toaster.service';
import { DateTimeFormatService } from 'src/app/shared/shared-services/date-time-format.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userId: string = '';
  showUserDetail: boolean = false;
  userDetails: any;
  reviewRating: any;
  showLoader: boolean = false;
  ride:any=0;
  constructor(private _route: ActivatedRoute,
    private _userManagementService: UserManagementService,
    private _loaderService: LoaderService,
    private _toastService : ToasterService,
    public _dateService : DateTimeFormatService) { }

    displayedColumns: string[] =['postedDate', 'from', 'to', 'rideDate', 'status', 'action'];
  // dataSource = new MatTableDataSource<any>();
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);



  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  ngOnInit(): void {

    this._route.queryParams.subscribe((params: Params) => {
      this.userId = params.userId;
      this.getProfileById();
      this.getUserPostedRides();
    })
  }

  getProfileById() {
    this._loaderService.loaderValue(true);
    this.showUserDetail = false;
    this._userManagementService.getProfileById(this.userId).pipe(
      catchError((err) => of(err)),
      tap((resp: any) => {
        if (resp.success) {
          this.showUserDetail = true;
          this.userDetails = resp.result;
          this.reviewRating = resp.result.review_rating;
          
        }
      }), finalize(() => {
        this._loaderService.loaderValue(false);

      })
    ).subscribe();
  }

// =================================================CHANGE USER STATUS==================================================

changeUserStatus(status){
let requestBody={
  isActive:status,
  userId:[this.userId]
}

this._userManagementService.changeUserStatus(requestBody).pipe(
  catchError((err)=>of(err)),
  tap((resp:any)=>{
    let message={
      msg:resp.message,
      type:'',
      summary:''
    }
if(resp.success){
message.type='success';
message.summary='Success';
this.getProfileById();
this.userDetails.isActive=status;
}
else{
  message.type='error';
  message.summary='Error';
  message.msg=resp.error && resp.error.message ? resp.error.message : resp.message;
}
this._toastService.toaster(message);
  }),finalize(()=>{

  })
).subscribe();
}

// =====================================GET USER POSTED RIDES========================================

getUserPostedRides(){
  this.showLoader=true;
  this._userManagementService.getUserPostedRides({userId:this.userId}).pipe(
    catchError((err)=>of(err)),
  tap((resp:any)=>{
if(resp.success){
this.dataSource=new MatTableDataSource<any>(resp.result.postedRides);
console.log(resp);

}
  }),finalize(()=>{
this.showLoader=false;
  })
  ).subscribe();
}

// ======================================GET USER TAKEN RIDES============================================

getRidesData(rideType){
  let dataSource: MatTableDataSource<any>
  this.dataSource = dataSource;
  
  if(rideType == 0){
    this.displayedColumns== ['postedDate', 'from', 'to', 'rideDate', 'status', 'action'];
    this.ride = rideType;
    this.getUserPostedRides();
  }

  else if(rideType == 1){
this.displayedColumns=['postedDate', 'from', 'to', 'rideDate', 'status', 'action'];
this.ride = rideType;
this.getUserTakenRides();
  }
  else{
this.displayedColumns=['postedDate', 'from', 'to', 'rideDate', 'status'];
this.ride = rideType;
this.getUserRequestedRides();
  }
 
}

getUserTakenRides(){
  this.showLoader=true;
   this._userManagementService.getUserTakenRides({userId:this.userId}).pipe(
    catchError((err)=>of(err)),
    tap((resp:any)=>{
  if(resp.success){
  this.dataSource=new MatTableDataSource<any>(resp.result.takenRides);
  
  }
    }),finalize(()=>{
  this.showLoader=false;
    }) 
  ).subscribe();
}

getUserRequestedRides(){
  this.showLoader=true;
   
  this._userManagementService.getUserRequestedRides({userId:this.userId}).pipe(
    catchError((err)=>of(err)),
    tap((resp:any)=>{
  if(resp.success){
  this.dataSource=new MatTableDataSource<any>(resp.result.rides);
  
  }
    }),finalize(()=>{
      this.showLoader=false;
    }) 
  ).subscribe();
}

}
