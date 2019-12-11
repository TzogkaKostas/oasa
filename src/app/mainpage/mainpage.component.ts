import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  findRout(from, to){
    if(from.value == "" || to.value==""){
      return;
    }
    console.log(from.value, " -> ", to.value);
    let newLink = "diadromi/" + from.value + "/" + to.value;
    console.log(newLink);
    this.router.navigate([newLink]);
  }

}
