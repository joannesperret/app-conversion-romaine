import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversion-romaine',
  templateUrl: './conversion-romaine.page.html',
  styleUrls: ['./conversion-romaine.page.scss'],
})
export class ConversionRomainePage {

  constructor() {}

  public resultat;
  public nombreSaisi;

  convertir(){      
      let saisie = this.nombreSaisi;
      console.log(saisie);
      console.log(this.nombreSaisi);
      let saisieArray;
      let unitRom;
      let tenRom;
      let centRom;
      let koRom;
      let unit;
      let ten;
      let cent;
      let mille;
// Mise à 0 du champs resultat:
      this.resultat="";
//intégration d'une invite de saisie
//let readline = require("readline-sync");
//installer readline-sync:
//let numberToRom = readline.question("Saisissez un nombre entre 1 et 9 999: ");
      let numberToRom = saisie;
//let numberToRom= result;
      let donneeSaisie;
//mise en mémoire de la donnée saisie
      donneeSaisie = numberToRom;
//conversion en chiffres
      donneeSaisie = parseInt(donneeSaisie);
//conversion de la saisie en string
      numberToRom = numberToRom.toString();
//conversion de la string en array
      saisieArray = numberToRom.split('');
//inversion des chiffres afin de traiter unités, centaines...
      saisieArray = saisieArray.reverse();
//association des variables au tableau
      unit = saisieArray[0];
      ten = saisieArray[1];
      cent = saisieArray[2];
      mille = saisieArray[3];
//transription de l'unité en chiffre Romain
      switch (unit) {
          case '1':
              unitRom = "I";
              break;
          case '2':
              unitRom = "II";
              break;
          case '3':
              unitRom = "III";
              break;
          case '4':
              unitRom = "IV";
              break;
          case '5':
              unitRom = "V";
              break;
          case '6':
              unitRom = "VI";
              break;
          case '7':
              unitRom = "VII";
              break;
          case '8':
              unitRom = "VIII";
              break;
          case '9':
              unitRom = "IX";
              break;
      }
      ;
//transription de la dizaine en chiffre Romain
      switch (ten) {
          case '1':
              tenRom = "X";
              break;
          case '2':
              tenRom = "XX";
              break;
          case '3':
              tenRom = "XXX";
              break;
          case '4':
              tenRom = "XL";
              break;
          case '5':
              tenRom = "L";
              break;
          case '6':
              tenRom = "LX";
              break;
          case '7':
              tenRom = "LXX";
              break;
          case '8':
              tenRom = "LXXX";
              break;
          case '9':
              tenRom = "XC";
              break;
      }
      ;
//transription de la centaine en chiffre Romain
      switch (cent) {
          case '1':
              centRom = "C";
              break;
          case '2':
              centRom = "CC";
              break;
          case '3':
              centRom = "CCC";
              break;
          case '4':
              centRom = "CD";
              break;
          case '5':
              centRom = "D";
              break;
          case '6':
              centRom = "DC";
              break;
          case '7':
              centRom = "DCC";
              break;
          case '8':
              centRom = "DCCC";
              break;
          case '9':
              centRom = "CM";
              break;
      }
      ;
//transription du millier en chiffre Romain
      switch (mille) {
          case '1':
              koRom = "M";
              break;
          case '2':
              koRom = "II.M";
              break;
          case '3':
              koRom = "III.M";
              break;
          case '4':
              koRom = "IV.M";
              break;
          case '5':
              koRom = "V.M";
              break;
          case '6':
              koRom = "VI.M";
              break;
          case '7':
              koRom = "VII.M";
              break;
          case '8':
              koRom = "VIII.M";
              break;
          case '9':
              koRom = "IX.M";
              break;
          case '10':
              koRom = "X.M";
      }
      ;
// Contrôle des conditions pour affichage des résultats:

//
//mise en place des contrôles
      if (donneeSaisie > 10000) {
          this.resultat += ("Le nombre saisi est supérieur à 10 000!");
      } else if (donneeSaisie < 0) {
          this.resultat += ("Le nombre saisi est négatif!")
      } else if (donneeSaisie === 0) {
          this.resultat += ("Vous avez saisi 0!")
      } else if (isNaN(donneeSaisie) === true) {
          this.resultat += ("Veuillez saisir un nombre!");
      }       
      else if (unitRom === undefined && tenRom === undefined && centRom === undefined) {
          this.resultat += (koRom);
      } else if (unitRom === undefined && centRom === undefined && koRom === undefined) {
          this.resultat += (tenRom);
      } else if (tenRom === undefined && centRom === undefined && koRom === undefined) {
          this.resultat += (unitRom);
      } else if (unitRom === undefined && tenRom === undefined && koRom === undefined) {
          this.resultat += (centRom);
      } else if (unitRom === undefined && tenRom === undefined) {
          this.resultat += (koRom + centRom);
      } else if (centRom === undefined && tenRom === undefined) {
          this.resultat += (koRom + unitRom);
      } else if (koRom === undefined && centRom === undefined) {
          this.resultat += (tenRom + unitRom);
      } else if (tenRom === undefined && koRom === undefined) {
          this.resultat += (centRom + unitRom);
      } else if (koRom === undefined && tenRom === undefined) {
          this.resultat += (centRom + tenRom);
      } else if (centRom === undefined && unitRom === undefined) {
          this.resultat += (koRom + tenRom);
        } else if (koRom === undefined && unitRom === undefined) {
            this.resultat += (centRom + tenRom);
      } else if (unitRom === undefined && tenRom === undefined && koRom === undefined) {
          this.resultat += (centRom);
      } else if (centRom === undefined) {
          this.resultat += (koRom + tenRom + unitRom);
      } else if (koRom === undefined) {
          this.resultat += (centRom + tenRom + unitRom);
        } else if (unitRom === undefined) {
            this.resultat += (koRom + centRom + tenRom);
      }else {
          this.resultat += (koRom + centRom + tenRom + unitRom);
      }
  }

}
