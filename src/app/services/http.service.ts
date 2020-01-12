import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http';
// import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url= '/';

  constructor(
    // private http: Http,
    private router: Router
  ) { }

  login(userInfo){
    // return this.http.post(this.getService.url + 'get_jwt',
    //   credentials)
    //   .map(response => {
    //     console.log(response);
    //     let result = response.json();
    //     console.log(result);
    //     console.log('TOKEN');
    //     if(result && result.token){
    //       localStorage.setItem('token', result.token);
    //       console.log(result.token);
    //       return true;
    //     }
    //     else{
    //       console.log('ERROR IN SIGN IN')
    //       return false;
    //     }
    //   });
  }

  signup(){

  }

  erotimatologio(){

  }

  parapona(){

  }

  isLoggedIn(){
    // return tokenNotExpired('token');//this does what the lines bellow does
    return true;
  }

  updateUserInfo(itemData){
    console.log("New object is :" + itemData);
    // return this.http.post(this.url + '/item/update_auction', itemData);
  }

}
