import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  mensaje = "mi mensaje dinamico"

  constructor() { }

  ngOnInit(): void {
  }

  years: string[]= ['2010', '2011', '2012'];

}
