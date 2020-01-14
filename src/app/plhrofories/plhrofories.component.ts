import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plhrofories',
  templateUrl: './plhrofories.component.html',
  styleUrls: ['./plhrofories.component.css']
})
export class PlhroforiesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  eidos: string;
  odikes: boolean;
  sta8eres: boolean;

  ngOnInit() {
    this.eidos = this.route.snapshot.paramMap.get("id");
    console.log(this.eidos);
    if(this.eidos == 'odikes'){
      this.odikes = true;
      this.sta8eres = false;
    }
    else{
      this.odikes = false;
      this.sta8eres = true;
    }
  }

}
