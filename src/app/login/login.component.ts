import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private httpServ: HttpService,
    private router: Router
  ) { }

  invalidLogin: boolean;

  ngOnInit() {
  }

  signIn(credentials){
    if(credentials.username == "" || credentials.password == "")return;
    // console.log("lalalaal"+credentials);
    this.invalidLogin = false;
    this.httpServ.login(credentials)
      .subscribe(result => { 
        console.log("RES: ");
        console.log(result);
      }, error =>{
        //alert('Invalid login');
        if(error.status === 404){
          this.invalidLogin = true;
        }
        else{
          alert('Something Went Wrong!' + " errostatus." + error.status);
        }
      });
  }

}
