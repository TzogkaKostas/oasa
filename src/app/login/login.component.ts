import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  signIn(credentials){
    // console.log(credentials);
    // this.invalidLogin = false;
    // this.authService.login(credentials)
    //   .subscribe(result => { 
    //     console.log('result ' + result);
    //     if (result){
    //       let something = this.authService.currentUser();
    //       console.log(something);
    //     let returnUrl = this.rout.snapshot.queryParamMap.get('returnUrl');
    //       if(this.authService.currentUser().admin_flag){
    //         this.router.navigate(['/admin']);
    //       }
    //       else{
    //         this.router.navigate([returnUrl || '/main-page']);
    //       }
    //     }
    //     else  
    //       this.invalidLogin = true;
    //   }, error =>{
    //     //alert('Invalid login');
    //     if(error.status === 401){
    //       this.invalidLogin = true;
    //     }
    //     else{
    //       alert('Something Went Wrong!');
    //     }
    //   });
  }

}
