import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }


    onLogin() {
         localStorage.setItem("us","us");
        this.route.navigate(['/minfa/dashboard']);
    }

}
