import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
// import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url= 'http://00d9d989.ngrok.io/angular_app/';

  constructor(
    // private httpC: HttpClient,
    private http: Http,
    private router: Router
  ) { }

  login(userInfo){
    // return this.http.get(this.url + 'get_user.php/',
    //   userInfo)
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
    // console.log('PIRA STO SIGN IN: ');
    console.log(userInfo);
    console.log(this.url + 'get_user.php/?username=' + userInfo.username + '&password=' + userInfo.password);
    // return
    // let params = { }
    // params['username'] = userInfo.username;
    // params['password'] = userInfo.password;
    return this.http.get(this.url + 'get_user.php/?username=' + userInfo.username + '&password=' + userInfo.password)
    .map(response => {
      let user = response.json();
      console.log("Logged in JSON: ", user);
      // console.log("Logged in: ", response);
      if(user){
        // if (user['state'] == 'ACCEPTED' && user['response'] == 'OK') {
        //   localStorage.setItem('token', JSON.stringify(user)); 
        //   localStorage.setItem('username', userInfo.username);           
        //   return true;
        // }  
        return user;
      }
      return false;
    });
  }

  signup(){

  }

  erotimatologio(){

  }

  parapona(){

  }

  isLoggedIn(){
    // return tokenNotExpired('token');//this does what the lines bellow does
    return false;
  }

  updateUserInfo(itemData){
    console.log("New object is :" + itemData);
    // return this.http.post(this.url + '/item/update_auction', itemData);
  }

}
