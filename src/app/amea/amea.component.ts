import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'amea',
  templateUrl: './amea.component.html',
  styleUrls: ['./amea.component.css']
})
export class AmeaComponent implements OnInit {

  constructor(
    //private router: Router
  ) { }

  ngOnInit() {
    //this.router.navigate(['', 'english']);
  }

}
