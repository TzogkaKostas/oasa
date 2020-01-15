import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url= 'http://f78fafea.ngrok.io/angular_app/';

  constructor(
    // private httpC: HttpClient,
    private http: Http,
    private router: Router
  ) { }

  login(userInfo){
    // console.log('PIRA STO SIGN IN: ');
    console.log(userInfo);
    console.log(this.url + 'get_user.php/?username=' + userInfo.username + '&password=' + userInfo.password);
    return this.http.get(this.url + 'get_user.php/?username=' + userInfo.username + '&password=' + userInfo.password)
    .map(response => {
      let user = response.json();
      console.log("Logged in JSON: ", user);
      // console.log("Logged in: ", response);
      if(user){
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      }
      return false;
    });
  }

  signup(userInfo){
    console.log(userInfo);
    // console.log(this.url + 'insert.php/?username=' + userInfo.username + '&password=' + userInfo.password);
    return this.http.get(this.url + 'insert.php/?username=' + userInfo.username + '&password=' + userInfo.password
    + '&name=' + userInfo.name + '&surname=' + userInfo.surname + '&email=' + userInfo.email);
  }

  edit(userInfo){
    return this.http.get(this.url + 'edit.php/?username=' + userInfo.username + '&password=' + userInfo.password
    + '&name=' + userInfo.name + '&surname=' + userInfo.surname + '&email=' + userInfo.email);
  }

  erotimatologio(){

  }

  parapona(){

  }

  isLoggedIn(){
    if(localStorage.getItem("user") === null)return false;
    return true;
  }

  updateUserInfo(itemData){
    console.log("New object is :" + itemData);
    // return this.http.post(this.url + '/item/update_auction', itemData);
  }

  current_user(){
    var user = localStorage.getItem("user");
    return JSON.parse(user);
  }

  sign_out(){
    localStorage.removeItem('user');
  }


}
