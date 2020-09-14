import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../shared-services/loader.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

   openNav() {
    document.getElementById("mySidenav").style.width = "220px";
    document.getElementById("main").style.marginLeft = "220px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }

}
