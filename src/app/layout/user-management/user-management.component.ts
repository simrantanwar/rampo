import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { UserManagementService } from './user-management.service';
import { catchError, tap, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { LoaderService } from 'src/app/shared/shared-services/loader.service';
import { ToasterService } from 'src/app/shared/shared-services/toaster.service';


@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})


export class UserManagementComponent implements OnInit {
userManagementLoader:boolean=false;
  constructor(private _userManagementService : UserManagementService,
    private _loaderService : LoaderService,
    private _toastService : ToasterService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  displayedColumns: string[] = ['select', 'name', 'email', 'contact' , 'status', 'action'];
  // dataSource = new MatTableDataSource<any>();
  dataSource : MatTableDataSource<any>;
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

  @ViewChild(MatPaginator,{static:false}) set paginator(paginator:MatPaginator){
    if(this.dataSource)
      this.dataSource.paginator=paginator;
    
  }
  // =================================GET_ALL_USERS========================================================

  getAllUsers(){
    this.userManagementLoader=false;
    this._loaderService.loaderValue(true);
    this._userManagementService.getAllUsers().pipe(
      catchError((err)=>of(err)),
      tap(resp=>{
        if(resp.success){
    this.userManagementLoader=true;
  this.dataSource = new MatTableDataSource<any>(resp.result.users)
        }
      }),finalize(()=>{
    this._loaderService.loaderValue(false);
        
      })
    ).subscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
 }

//  ================================================CHANGE USER STATUS===============================================================

changeUserStatus(status){
 
let userId= this.selection.selected.map(x=>x.userId);
let requestBody={
isActive:status,
userId:userId
}

this._userManagementService.changeUserStatus(requestBody).pipe(
  catchError((err)=>of(err)),
  tap(resp=>{
    let message={
      msg:resp.message,
      type:'',
      summary:''
    }
if(resp.success){
  this.getAllUsers();
  this.selection.clear();
  message.type='success';
  message.summary='Success';
 
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

}
