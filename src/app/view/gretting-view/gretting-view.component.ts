import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gretting-view',
  templateUrl: './gretting-view.component.html',
  styleUrls: ['./gretting-view.component.css']
})
export class GrettingViewComponent implements OnInit {

  isVisible: boolean = false;
  nombre = "";
  mensaje = "Hola - ";

  constructor() { }

  ngOnInit(): void {
  }

  showGretting() {
    this.isVisible = true;
  }

  /*showGretting(value: string) {
    this.isVisible = true;
    this.mensaje = this.mensaje + value
  }*/

}
