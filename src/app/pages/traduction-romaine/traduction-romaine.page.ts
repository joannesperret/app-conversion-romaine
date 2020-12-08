import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traduction-romaine',
  templateUrl: './traduction-romaine.page.html',
  styleUrls: ['./traduction-romaine.page.scss'],
})
export class TraductionRomainePage{



constructor() {}

// récupération de l'objet HTML d'affichage du résultat
public result;

// récupération de la valeur saisie
public nombreSaisi: string;
 
  // fonction d'affichage
 

// Fonction de conversion des unités Romaines en chiffres

unit(){
    
    // unité
    var unitRom = 0;
    // récupération du dernier caractère de la saisie
    var unit1 = (this.nombreSaisi.substr(-1, 1));

    switch (unit1) {

        case 'I':
            unitRom = 1;
            break;
        case 'V':
            unitRom = 5;
            break;
//            case 'X':
//                unitRom = 10;
//                break;
    }
    // récupération des deux derniers caractères de la saisie               
    var unit2 = (this.nombreSaisi.substr(-2));
    switch (unit2) {
        case 'II':
            unitRom = 2;
            break;
        case 'IV':
            unitRom = 4;
            break;
        case 'VI':
            unitRom = 6;
            break;
        case 'IX':
            unitRom = 9;
            break;
    }

    // récupération des deux derniers caractères de la saisie
    var unit3 = (this.nombreSaisi.substr(-3));
    switch (unit3) {
        case 'III':
            unitRom = 3;
            break;
        case 'VII':
            unitRom = 7;
            break;
        case 'IIX':
            unitRom = 8;
            break;
    }
    return unitRom; 
}

    ten(){
     
    // contrôle de la présence des centaines dans la saisie 
     // centaine
    var dizaine = new Object();
    var tenRom = 0;
    
    dizaine["XXX"] = 30;
    dizaine["XL"] = 40;
    dizaine["LXX"] = 70;
    dizaine["LX"] = 60;
    dizaine["L"] = 50;
    dizaine["XXC"] = 80;
    dizaine["XC"] = 90;
    dizaine["XX"] = 20;
    dizaine["X"] = 10;
    
    for (var i in dizaine)
    {
        if(this.nombreSaisi.includes(i)){tenRom = dizaine[i];
        break;
    }
        
    }
    
    return tenRom; 
}

    cent(){    
           
    // contrôle de la présence des centaines dans la saisie 
     // centaine
    var centaine = new Object();  
    var centRom = 0;         
    
    centaine["CCC"] = 300;
    centaine["CD"] = 400;           
    centaine["DCC"] = 700;
    centaine["DC"] = 600;
    centaine["D"] = 500;
    centaine["CCM"] = 800;
    centaine["CM"] = 900;
    centaine["CC"] = 200;
    centaine["C"] = 100;
    
    for (var i in centaine)
    {
        if(this.nombreSaisi.includes(i)){centRom = centaine[i];
                                   break;
    }
        
    }
    
    return centRom; 
}

    mille(){
              
    // contrôle de la présence des milliers dans la saisie 
    
    var milliers = new Object();
    var koRom = 0;

    milliers["MMMM"] = 4000;
    milliers["MMM"] = 3000;
    milliers["MM"] = 2000;
    milliers["M"] = 1000;
    
    for (var i in milliers)
    {
        if(this.nombreSaisi.includes(i)){koRom = milliers[i];
                                   break;
    }
        
    }
    
    return koRom; 
    
}

   convertir(){
   var resultUnit= this.unit();
   var resultTen= this.ten();
   var resultCent= this.cent();
   var resultKo= this.mille();

   this.result= resultUnit + resultTen+ resultCent + resultKo;
   
   if(this.result===0){this.result = ("Vous essayez de traduire des hiéroglyphes? ;) ");
   }
   else{
   this.result = (this.result);
  }
}



}
