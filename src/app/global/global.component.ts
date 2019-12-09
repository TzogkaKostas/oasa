import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {

  constructor(
    private router: ActivatedRoute
    //private httpservice: HttpService
  ) { }

  greek = true;
  language;

  ngOnInit() {
    this.greek = true;
  }

  changeLanguage(){
    this.greek = !this.greek;
    //window.location.reload();
  }

}
