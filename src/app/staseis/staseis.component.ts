import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staseis',
  templateUrl: './staseis.component.html',
  styleUrls: ['./staseis.component.css']
})
export class StaseisComponent implements OnInit {

  constructor(
    private router: Router,
    private actRout: ActivatedRoute
  ) { }

  private grammh:any
  private to_show = []

  staseis=[
    ['A2', ['Αφετηρια Α2 - Akadimia', true], ['Πλ. Συνταγματος - Pl.Syntagmatos', false], ['Μακρυγιαννη - Makrygianni', true], ['Στ. Συγγρου-Φιξ - St.Syggrou-Fix', false], ['Ολυμπιακη - Olympiaki', true], 
            ['Γεφυρα - Gefyra', false], ['Παντειος - Panteios', true], ['Αγ. Σωστης - Ag. Sostis'], ['Εφεσου - Efesoy', false], ['Κυανους Σταυρος - Kyanoys Stavros', true], ['Στροφη Ν. Σμυρνης - Strofi N. Smyrnis', true]]
  ]

  ngOnInit() {
    this.grammh = this.actRout.params['_value']['id'];
    console.log(this.actRout.params['_value']['id'])
    console.log(this.grammh);
    this.to_show = [];
    var j;
    for(j = 0 ; j < this.staseis.length ; j++){
      if(this.grammh == this.staseis[j][0])break;
    }
    console.log(this.staseis[0]);
    for(var i = 1 ; i < this.staseis[j].length ; i++){
      this.to_show.push(this.staseis[j][i]);
    }
  }

  // show(val){
  //   console.log(val);
  //   this.to_show = [];
  //   var index = this.staseis.indexOf(val);
  //   for(var i = 1 ; i < this.staseis[index].length ; i++){
  //     this.to_show.push(this.staseis[index][i]);
  //   }
  // }

}
