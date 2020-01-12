import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signUp(credentials) {
    // if( credentials.latitude > 90 || credentials.latitude < -90 ){
    //   alert('Latitude must be between (-90,90)degrees!');
    //   return;
    // }
    // if( credentials.longitude > 180 || credentials.longitude < -180 ){
    //   alert('Longitude must be between (-180,180)degrees!');
    //   return;
    // }


    // delete credentials.password2

    // console.log(credentials);
    // this.invalidSignUp = false;
    
    // this.authService.logup(credentials)
    //   .subscribe(result => { 
    //     if (result){
    //       this.router.navigate(['/main-page']);
    //     }
    //     else  
    //       this.invalidSignUp = true; 
    //   }, error => {
    //     console.log(error);
    //     this.invalidSignUp = true;
    //   });
  }

}
