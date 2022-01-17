import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/data/form';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  form = new Form()

  constructor() { }

  ngOnInit(): void {
  }

  signIn() {
    alert(this.form.email+this.form.pass+this.form.address+this.form.addressTwo+this.form.city+this.form.zip);
  }

}
