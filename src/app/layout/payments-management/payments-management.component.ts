import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PaymentsManagementService } from './payments-management.service';
import { catchError, tap, finalize, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { of, fromEvent } from 'rxjs';
import { DateTimeFormatService } from 'src/app/shared/shared-services/date-time-format.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-payments-management',
  templateUrl: './payments-management.component.html',
  styleUrls: ['./payments-management.component.css']
})
export class PaymentsManagementComponent implements OnInit {
  displayedColumns: string[] = ['Payment Date', 'Ride ID', 'payer', 'Receiver', 'Amount', 'Type', 'Transaction ID'];
  dataSource = new MatTableDataSource<any>();

  totalRecords: number = 0;
  pageSize: number = 5;
  pageNo: number = 1;

  constructor(private _paymentService: PaymentsManagementService,
    public _dateService: DateTimeFormatService) { }
  @ViewChild('fromDate', { static: true }) fromDate: MatDatepicker<any>;
  @ViewChild('toDate', { static: true }) toDate: MatDatepicker<any>;
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @ViewChild(MatPaginator, { static: false }) set paginator(paginator: MatPaginator) {
    if (this.dataSource) {
      this.dataSource.paginator = paginator;
    }
  }
  ngOnInit(): void {
    this.getAllTransaction();
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => {
        this.getAllTransaction();
      })
    ).subscribe();

  }
  


  getAllTransaction() {
    let requestBody = {
      page: this.pageNo,
      pageSize: this.pageSize,
      from: this.fromDate.startAt,
      to: this.toDate.startAt,
      search: this.searchInput.nativeElement.value
    }
    this._paymentService.getAllTransactions(requestBody).pipe(
      catchError((err) => of(err)),
      tap((resp: any) => {
        this.dataSource = new MatTableDataSource<any>(resp.result.transaction);
        this.totalRecords = resp.result.totalCount;
        console.log(resp);

      }), finalize(() => {

      })
    ).subscribe();
  }

  paginate(event) {
    this.pageNo = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.totalRecords = event.lenght;
    this.getAllTransaction();

  }

  startDate(event: MatDatepickerInputEvent<Date>) {
    this.fromDate.startAt = event.value;
    this.getAllTransaction();
  }

  endDate(event: MatDatepickerInputEvent<Date>) {
    this.toDate.startAt = event.value;
    this.getAllTransaction();
  }

}
