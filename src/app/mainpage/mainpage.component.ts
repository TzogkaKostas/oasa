import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject, Observable, merge } from 'rxjs';

@Component({
  selector: 'mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  whereToVar = false;
  amea = false;
  from: string;
  to: string;
  options = ['Βούλα', 'Γλυφάδα', 'Βουλιαγμένη', 'Περιστέρι', 'Εξάρχεια', 'Μαρούσι', 'Ζωγράφου', 'Καισαριανή']

  public model: any;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.options.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchFun(value){
    window.location.reload();
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
    this.from = from;
    this.to = to;
    // this.router.navigate([newLink]);
  }

}
