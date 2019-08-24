import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav') sidenav: ElementRef;

  clicked: boolean;
   login_status :any
  constructor(private route : Router , public authservice:AuthService) {
    this.clicked = this.clicked === undefined ? false : true;
  }

  ngOnInit() {
      this.login_status = localStorage.getItem("us");
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

    logout(){
     localStorage.removeItem("us");
     this.route.navigate(['minfa/login']);
    }

}
