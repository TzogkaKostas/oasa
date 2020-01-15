import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'times-eisitirion',
  templateUrl: './times-eisitirion.component.html',
  styleUrls: ['./times-eisitirion.component.css']
})
export class TimesEisitirionComponent implements OnInit {

  constructor(
    private router: Router,
    private actRout: ActivatedRoute
  ) { }

  eisitiria:boolean;
  kartes:boolean;
  eidos:any;
  
  eisitiria_pinakas = [['90 λεπτών', '1.40€', '(Απαιτέιται Προσωποποιημένη Καρτα)'], ['24 Ωρών', '4.50€', '(Απαιτέιται Προσωποποιημένη Καρτα)'], ['5 ημερών', '9€', '(Απαιτέιται Προσωποποιημένη Καρτα)'] ]
  kartes_pinakas = [['90 λεπτών', '1.40€', '(Απαιτέιται Προσωποποιημένη Καρτα)', '1.40€', '0.90€'], ['24 Ωρών', '4.50€', '(Απαιτέιται Προσωποποιημένη Καρτα)', '4.50€', '(Απαιτέιται Προσωποποιημένη Καρτα)'], 
  ['5 ημερών', '9€', '(Απαιτέιται Προσωποποιημένη Καρτα)', '9€', '(Απαιτέιται Προσωποποιημένη Καρτα)'], ['30 ημερών (Κάρτα)', '30€', '(Απαιτέιται Προσωποποιημένη Καρτα)', '30€', '15€'] ]
  to_show=[]
  to_show1=[]


  ngOnInit() {
    this.eidos = this.actRout.params['_value']['id'];
    if(this.eidos == 'eisitiria'){
      this.eisitiria =true
    }
    else{
      this.kartes =true
    }
    // console.log(val);
    this.to_show = [];
    for(var i = 0 ; i < this.eisitiria_pinakas.length ; i++){
      this.to_show.push(this.eisitiria_pinakas[i]);
    }
    this.to_show1 = [];
    for(var i = 0 ; i < this.kartes_pinakas.length ; i++){
      this.to_show1.push(this.kartes_pinakas[i]);
    }
  }

}
