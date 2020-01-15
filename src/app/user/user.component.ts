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
  item;

  constructor(
    private router: ActivatedRoute,
    // private httpservice: HttpService,
    private http: HttpService,
    private rou: Router
  ) { }

  ngOnInit() {
    this.willChangeCount = 4;
    for(var i=0;i<this.willChangeCount;i++)
      this.willChange[i] = false;
    this.item = this.http.current_user();
  }

  editUser(index)
  {
    this.willChange[index] = !this.willChange[index];
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
    console.log(itemData);
    this.http.edit(itemData)
      .subscribe(result => { 
        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(itemData));
        alert('Επιτυχής Αλλαγή Στοιχείων');
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

  cancel(){
    this.rou.navigate(['']);
  }
  

}
