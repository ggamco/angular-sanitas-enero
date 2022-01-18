import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-b',
  templateUrl: './view-b.component.html',
  styleUrls: ['./view-b.component.css']
})
export class ViewBComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToA() {
    // alert("go to a")
    this.router.navigate(['view/a'])
  }

}
