import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

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
	constructor() {
		this.minDate = {year: 2010, month: 1, day: 1};
		let curDate = new Date();
		this.maxDate = {year:curDate.getFullYear(), month: curDate.getMonth() + 1, day: curDate.getUTCDate() + 1};		
  }

  ngOnInit() {
  }

}
