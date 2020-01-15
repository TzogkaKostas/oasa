import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'forma-paraponon',
  templateUrl: './forma-paraponon.component.html',
  styleUrls: ['./forma-paraponon.component.css']
})
export class FormaParapononComponent implements OnInit {

	calendar_date: NgbDateStruct;
	time = {hour: 0, minute: 0};
	minDate;
	maxDate;

	first_name: any;
	last_name: any;
	email: any;
	meso : any;
	direction: any;

	constructor(private router: Router) {
		this.minDate = {year: 2010, month: 1, day: 1};
		let curDate = new Date();
		this.maxDate = {year:curDate.getFullYear(), month: curDate.getMonth() + 1, day: curDate.getUTCDate()};		
  }

  ngOnInit() {
  }

  onSubmit() {
	this.router.navigate(['/success_submit']);
}

}
