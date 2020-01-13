import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shmeia-ekdosis-odikes',
  templateUrl: './shmeia-ekdosis-odikes.component.html',
  styleUrls: ['./shmeia-ekdosis-odikes.component.css']
})
export class ShmeiaEkdosisOdikesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  diadromes = [
    ['Γλυφάδα', ['periptero','sarantaporou 789', "Δευτερα-Παρασκευη: \
    08:00-17:00, Σαββατο-Κυριακη: Κλειστά1" ], ['periptero','sarantaporou 789', "Δευτερα-Παρασκευη: \
    08:00-17:00, Σαββατο-Κυριακη: Κλειστά2" ], ['periptero','sarantaporou 789', "Δευτερα-Παρασκευη:\
     08:00-17:00, Σαββατο-Κυριακη: Κλειστά3" ]],
    ['Βούλα', 'asd4', 'asd5', 'asd6'],
    ['Περιστέρι', 'asd7', 'asd8', 'asd9']
  ]

  to_show = [];

  eidos: string;
  odikes: boolean;
  sta8eres: boolean;

  ngOnInit() {
    this.eidos = this.route.snapshot.paramMap.get("id");
    console.log(this.eidos);
    if(this.eidos == 'odikes'){
      this.odikes = true;
      this.sta8eres = false;
    }
    else{
      this.odikes = false;
      this.sta8eres = true;
    }
  }

  show(val){
    console.log(val);
    this.to_show = [];
    var index = this.diadromes.indexOf(val);
    for(var i = 1 ; i < this.diadromes[index].length ; i++){
      this.to_show.push(this.diadromes[index][i]);
    }
  }

}
