import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared-services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  showLoader:boolean=false;
  constructor(private _loaderService : LoaderService) { }

  ngOnInit(): void {
    this.loader();
  }

  loader(){
    this._loaderService.loaderState.subscribe(resp=>{
     
    this.showLoader= resp;
    }
    )
  }

}
