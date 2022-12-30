//Modul -> u typescriptu koristimo module 
//modul podrazumjenva ako imamo neku clasu da je mozemo koristit izvan tog fajla u nekom drugom
//to postizemo pomocu naredbe export i import

export class Point{
  number x;
  number y;
}



//main.js  da je ovo neki drugi fajl u kojem trebamo kreirati instancu klase

import {Point} from './point';  // u zagradi je classa koju importujemo, a pod navodnicima path sa kojeg uzimamo classu ali ne point.ts bez .ts
