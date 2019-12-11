import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evresi-diadromis',
  templateUrl: './evresi-diadromis.component.html',
  styleUrls: ['./evresi-diadromis.component.css']
})
export class EvresiDiadromisComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  from: string;
  to: string;

  ngOnInit() {
     // console.log(this.route.snapshot.paramMap.get("from"));
     this.from = this.route.snapshot.paramMap.get("from");
     this.to = this.route.snapshot.paramMap.get("to");
     console.log("Elava: " + this.from + ", ", this.to);
  }

}
