import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-a',
  templateUrl: './view-a.component.html',
  styleUrls: ['./view-a.component.css']
})
export class ViewAComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToB() {
    // alert("go to b")
    this.router.navigate(['view/b'])
  }

}
