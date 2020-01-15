import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private httpServ: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  signUp(credentials) {
    this.httpServ.signup(credentials)
      .subscribe(result => { 
        localStorage.setItem('user', JSON.stringify(credentials));
        this.router.navigate(['']);
      }, error =>{
        //alert('Invalid login');
        if(error.status === 404){
          // this.invalidLogin = true;
        }
        else{
          alert('Something Went Wrong!' + " errostatus." + error.status);
        }
      });
  }

}
