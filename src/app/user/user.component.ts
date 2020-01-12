import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private willChange: boolean[]=[];
  private willChangeCount: number
  item = {"name":"John", "surname":"fgdfgDoe", "email":"ljklDoe","password":"rterDoe","password2":"qweDoe"}

  constructor(
    private router: ActivatedRoute,
    // private httpservice: HttpService,
    private http: HttpService,
    private rou: Router
  ) { }

  ngOnInit() {
    this.willChangeCount = 5;
    for(var i=0;i<this.willChangeCount;i++)
      this.willChange[i] = false;
  }

  editUser(index)
  {
    this.willChange[index] = true;
  }

  setNewValue(field, newValue, index)
  {
    this.willChange[index] = false;
    console.log("New values is " + newValue.value);
    if(newValue.value)
      this.item[field] = newValue.value;
    console.log("Now the item is" + this.item);
    return field;
  }

  Update(itemData)
  {
    console.log("New object is (update) :" + itemData);
   
    this.http.updateUserInfo(itemData)
    // .subscribe( (response) => {
    //   if(response){
    //     console.log("Auction Updated Sucessfully");
    //     this.router.navigate(['']);
    //   } else{
    //     // this.changesWentWrong = true;
    //     console.log("Something went wrong. Auction has not been updated."); 
    //   }
    // });
    this.rou.navigate(['']);//diagrafh
  }

  cancel(){
    this.rou.navigate(['']);
  }
  

}
