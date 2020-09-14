import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/index';
const GET_ALL_TRANSACTION = `${environment.Config.apiUrl}getAllTransaction`;
@Injectable({
  providedIn: 'root'
})
export class PaymentsManagementService {

  constructor(private http : HttpClient) { }

  getAllTransactions(requestBody){
return this.http.get(`${GET_ALL_TRANSACTION}?page=${requestBody.page}&page_size=${requestBody.pageSize}&from=${requestBody.from}&to=${requestBody.to}&search=${requestBody.search}`);
  }
}
