import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apolesthenta',
  templateUrl: './apolesthenta.component.html',
  styleUrls: ['./apolesthenta.component.css']
})
export class ApolesthentaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  apolesthenta(info){
    console.log(info)
    // gia server request
    alert("Επιτυχής Καταχώρηση. Θα επικοινωνήσουμε μαζί σας άμεσα.");
    this.router.navigate(['']);
  }

  cancel(){
    this.router.navigate(['']);
  }

}
