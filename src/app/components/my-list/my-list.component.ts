import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  years: number[]= [2010, 2011, 2012, 2013];
  isTrue: boolean = true;

  constructor() { }

  ngOnInit(): void {
    
  }

}
