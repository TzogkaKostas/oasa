import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plhrofories',
  templateUrl: './plhrofories.component.html',
  styleUrls: ['./plhrofories.component.css']
})
export class PlhroforiesComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }

  diadromes = [
    ['ΑΚΑΔΗΜΙΑ',
                ['A2','  ΑΚΑΔΗΜΙΑ – ΒΟΥΛΑ (ΜΕΣΩ Λ. ΑΜΦΙΘΕΑΣ)'],
                ['A3','ΑΚΑΔΗΜΙΑ – ΓΛΥΦΑΔΑ (μέσω Λ. Βουλιαγμένης)'],
                ['A5','ΑΚΑΔΗΜΙΑ – ΑΓ. ΠΑΡΑΣΚΕΥΗ – ΑΝΘΟΥΣΑ'],
                ['A7','ΣΤΟΥΡΝΑΡΗ – ΚΗΦΙΣΙΑ (ΠΛΑΤΕΙΑ ΠΛΑΤΑΝΟΥ)'],],
    ['ΙΠΠΟΚΡΑΤΟΥΣ', ['025','ΙΠΠΟΚΡΑΤΟΥΣ – ΠΡΟΦΗΤΗ ΔΑΝΙΗΛ'],
                    ['026','ΙΠΠΟΚΡΑΤΟΥΣ – ΒΟΤΑΝΙΚΟΣ']],
    ['ΠΕΙΡΑΙΑΣ', ['A1','ΠΕΙΡΑΙΑΣ – ΒΟΥΛΑ'],
                ['500','ΠΕΙΡΑΙΑΣ – ΚΗΦΙΣΙΑ (ΠΛ. ΠΛΑΤΑΝΟΥ) (ΝΥΧΤΕΡΙΝΗ)']],
    ['ΚΥΨΕΛΗ', ['022','Ν. ΚΥΨΕΛΗ – ΜΑΡΑΣΛΕΙΟΣ'],
                ['035', 'ΑΝΩ ΚΥΨΕΛΗ – ΠΕΤΡΑΛΩΝΑ – ΤΑΥΡΟΣ'],
                ['036', 'ΣΤ. ΚΑΤΕΧΑΚΗ – ΣΤ. ΠΑΝΟΡΜΟΥ – ΓΑΛΑΤΣΙ – ΚΥΨΕΛΗ (ΚΥΚΛΙΚΗ)']],
    ['ΠΑΤΗΣΙΑ', ['024','ΑΓ. ΑΝΑΡΓΥΡΟΙ – ΣΤ. ΚΑΤΩ ΠΑΤΗΣΙΑ (ΚΥΚΛΙΚΗ)'],
                ['444','ΣΤ. ΕΙΡΗΝΗ – ΓΑΛΑΤΣΙ – ΣΤ. ΑΝΩ ΠΑΤΗΣΙΑ (ΚΥΚΛΙΚΗ)']]  
  ];

  grammes = [
    ['0', ['024','ΑΓ. ΑΝΑΡΓΥΡΟΙ – ΣΤ. ΚΑΤΩ ΠΑΤΗΣΙΑ (ΚΥΚΛΙΚΗ)'],
          ['025','ΙΠΠΟΚΡΑΤΟΥΣ – ΠΡΟΦΗΤΗ ΔΑΝΙΗΛ'],
          ['026','ΙΠΠΟΚΡΑΤΟΥΣ – ΒΟΤΑΝΙΚΟΣ'],
          ['022','Ν. ΚΥΨΕΛΗ – ΜΑΡΑΣΛΕΙΟΣ'],
          ['035', 'ΑΝΩ ΚΥΨΕΛΗ – ΠΕΤΡΑΛΩΝΑ – ΤΑΥΡΟΣ'],
          ['036', 'ΣΤ. ΚΑΤΕΧΑΚΗ – ΣΤ. ΠΑΝΟΡΜΟΥ – ΓΑΛΑΤΣΙ – ΚΥΨΕΛΗ (ΚΥΚΛΙΚΗ)']],
    ['Α', ['A1','ΠΕΙΡΑΙΑΣ – ΒΟΥΛΑ'],
          ['A2','  ΑΚΑΔΗΜΙΑ – ΒΟΥΛΑ (ΜΕΣΩ Λ. ΑΜΦΙΘΕΑΣ)'],
          ['A3','ΑΚΑΔΗΜΙΑ – ΓΛΥΦΑΔΑ (μέσω Λ. Βουλιαγμένης)'],
          ['A5','ΑΚΑΔΗΜΙΑ – ΑΓ. ΠΑΡΑΣΚΕΥΗ – ΑΝΘΟΥΣΑ'],
          ['A7','ΣΤΟΥΡΝΑΡΗ – ΚΗΦΙΣΙΑ (ΠΛΑΤΕΙΑ ΠΛΑΤΑΝΟΥ)'],],
    ['Β', ['Β1','ΠΕΙΡΑΙΑΣ – ΑΝΩ ΓΛΥΦΑΔΑ']],
    ['Γ', ['Γ1','ΚΑΜΑΤΕΡΟ – ΑΓ. ΝΙΚΟΛΑΟΣ – ΙΛΙΟΝ – ΠΟΛΥΤΕΧΝΕΙΟ (ΚΥΚΛΙΚΗ)']],
    ['Ε', ['Ε90','ΠΕΙΡΑΙΑΣ – ΠΑΝΕΠΙΣΤΗΜΙΟΥΠΟΛΗ (ΣΧΟΛΙΚΗ EXPRESS)']]
  ];


  //               ['A2','  ΑΚΑΔΗΜΙΑ – ΒΟΥΛΑ (ΜΕΣΩ Λ. ΑΜΦΙΘΕΑΣ)'],
  //               ['A3','ΑΚΑΔΗΜΙΑ – ΓΛΥΦΑΔΑ (μέσω Λ. Βουλιαγμένης)'],
  //               ['A5','ΑΚΑΔΗΜΙΑ – ΑΓ. ΠΑΡΑΣΚΕΥΗ – ΑΝΘΟΥΣΑ'],
  //               ['A7','ΣΤΟΥΡΝΑΡΗ – ΚΗΦΙΣΙΑ (ΠΛΑΤΕΙΑ ΠΛΑΤΑΝΟΥ)'],
  //   [           ['025','ΙΠΠΟΚΡΑΤΟΥΣ – ΠΡΟΦΗΤΗ ΔΑΝΙΗΛ'],
  //               ['026','ΙΠΠΟΚΡΑΤΟΥΣ – ΒΟΤΑΝΙΚΟΣ']],
  //   [           ['A1','ΠΕΙΡΑΙΑΣ – ΒΟΥΛΑ'],
  //               ['500','ΠΕΙΡΑΙΑΣ – ΚΗΦΙΣΙΑ (ΠΛ. ΠΛΑΤΑΝΟΥ) (ΝΥΧΤΕΡΙΝΗ)']],
  //   [           ['022','Ν. ΚΥΨΕΛΗ – ΜΑΡΑΣΛΕΙΟΣ'],
  //               ['035', 'ΑΝΩ ΚΥΨΕΛΗ – ΠΕΤΡΑΛΩΝΑ – ΤΑΥΡΟΣ'],
  //               ['036', 'ΣΤ. ΚΑΤΕΧΑΚΗ – ΣΤ. ΠΑΝΟΡΜΟΥ – ΓΑΛΑΤΣΙ – ΚΥΨΕΛΗ (ΚΥΚΛΙΚΗ)']],
  //   [           ['024','ΑΓ. ΑΝΑΡΓΥΡΟΙ – ΣΤ. ΚΑΤΩ ΠΑΤΗΣΙΑ (ΚΥΚΛΙΚΗ)'],
  //               ['444','ΣΤ. ΕΙΡΗΝΗ – ΓΑΛΑΤΣΙ – ΣΤ. ΑΝΩ ΠΑΤΗΣΙΑ (ΚΥΚΛΙΚΗ)']]  
  // ]

  to_show = [];
  to_show1 = [];


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

  show1(val1){
    console.log(val1);
    this.to_show1 = [];
    var index1 = this.grammes.indexOf(val1);
    for(var j = 1 ; j < this.grammes[index1].length ;  j++){
      this.to_show1.push(this.grammes[index1][j]);
    }
  }

}
