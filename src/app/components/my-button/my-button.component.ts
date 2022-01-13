import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  @Input() mensaje: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  years: string[]= ['2010', '2011', '2012'];

}
