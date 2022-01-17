import { Component, OnInit } from '@angular/core';
import { Login } from './data/login';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  userInfo = new Login();

  constructor() { }

  ngOnInit(): void {
  }

  login() {
    const validUser = "asd";
    const validPass = "dsa";

    if(this.userInfo.email === validUser && this.userInfo.password === validPass) {
      alert("Login ok");
    } else {
      alert("login fail")
    }
  }

}
