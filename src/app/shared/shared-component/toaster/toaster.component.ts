import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../../shared-services/toaster.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent implements OnInit {
responseMessage:any;
  constructor(private _toastService: ToasterService, private messageService: MessageService) { }

  ngOnInit(): void {
 this. toaster();
  }


  toaster() {
    this._toastService.toastState.subscribe((resp:any) => {
      if (resp.msg) {
  this.responseMessage=resp
  this.messageService.add({severity:resp.type, summary: resp.summary, detail:resp.msg});
  
      } })
  }


}
