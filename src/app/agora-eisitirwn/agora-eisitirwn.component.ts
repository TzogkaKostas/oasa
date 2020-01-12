import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-agora-eisitirwn',
  templateUrl: './agora-eisitirwn.component.html',
  styleUrls: ['./agora-eisitirwn.component.css']
})
export class AgoraEisitirwnComponent implements OnInit {

  myarray: any[][] = [[0, 1], [0, 1], [0, 1], [0, 1], [0, 1]];
  ticket_costs = [1.40, 0.70, 4.50, 9.00, 6.00];
  total_sum: any;
  first_name_var: any;
  last_name: any;
  credit_card_number: any;
  security_code: any;
  expiration_month: any;
  expiration_year: any;
  athena_number: any;
  email: any;




  constructor(private router: Router) {
    this.total_sum = '0';
  } 

  ngOnInit() {
  }

  checkValue(event: any, isChecked: any){
    if (isChecked) {
      this.myarray[Number(event.target.id) - 1][0] = 1; 
    }
    else {
      this.myarray[Number(event.target.id) - 1][0] = 0; 
    }
    this.calculate_total_sum();
 }


  onKey(event: any) {
    this.myarray[Number(event.target.id) - 1][1] = event.target.value; 
    this.calculate_total_sum();
  }

  calculate_total_sum() {
    this.total_sum = 0;
    for (let i = 0; i < 5; i++) {
      this.total_sum += this.myarray[i][0]*this.myarray[i][1]*this.ticket_costs[i];
    }
  }

  allowOnlyNumber(evt: any)
  {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }

  onSubmit() {
      this.router.navigate(['/success_submit']);
  }

  plus(event: any) {
    this.myarray[Number(event.target.id) - 1][1] += 1;
    this.calculate_total_sum();
  }

  minus(event: any) {
    if (this.myarray[Number(event.target.id) - 1][1] > 0) {
      this.myarray[Number(event.target.id) - 1][1] -= 1;
    }
    this.calculate_total_sum();
  }
}
