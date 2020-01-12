import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'erotimatologio',
  templateUrl: './erotimatologio.component.html',
  styleUrls: ['./erotimatologio.component.css']
})
export class ErotimatologioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  erotimatologio(questionInfo){
    console.log(questionInfo)
    alert("Επιτυχής Καταχώρηση. Ευχαριστούμε για την βοήθειά σας.");
    this.router.navigate(['']);
    // service command apo server me httpclient
  }

  cancel(){
    this.router.navigate(['']);
  }

}
