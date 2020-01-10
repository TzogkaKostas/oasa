import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  whereToVar = false;
  amea = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  AmeA(){
    console.log("You chose AMEA");
    this.amea = true;
  }

  findRout(from, to){
    if(from.value == "" || to.value==""){
      return;
    }
    console.log(from.value, " -> ", to.value, " ", this.amea);
    let newLink = "diadromi/" + from.value + "/" + to.value;
    console.log(newLink);
    this.whereToVar = true;
    // this.router.navigate([newLink]);
  }

}
