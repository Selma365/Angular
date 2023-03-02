import { Component,OnInit,Input,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>Umjesto templateUrl i postavljanja fajla .html mozemo pisati Inline template kao ovaj sa template atributom
                  Ako pisemo vise linija mozemo koristiti umjesto navodnika ove krive jednostruke navodnike.
                  Welcome {{name}}
                  {{greetUser()}}
                  <input  disabled={{isdisabled}} value = "ana" type= "text">  <!-- attribute binding is static and is written in dom-->
                  <input  [disabled]= "true" value = "selma" type= "text"> <!-- propertiy binding is dinamic-->
                  <h2 class="text-succes">
                    Naslov
                  </h2>
                  <h2 [class]="successClass">
                    Naslov
                  </h2>
                  <h2 [class.text-danger]="hasError">
                    Naslov
                  </h2>
                  <h2 [ngClass]="allClasses">
                    Naslov
                  </h2>
                  <h2 [style.color] ="'orange'">Style Binding</h2>
                  <button (click)="clickMe()">Click me</button>
                  {{click}}

                  <input #myInput type="text">
                  <button (click)="isprintajUnos(myInput.value)">Isprintaj unos</button>

                  <input [(ngModel)]="unos" type="text"> {{unos}}

                  <h2 *ngIf= true>ngIf example</h2>

                  <h2>Hello  {{parentData}}</h2>
                  <button (click)="fireEvent()">Send data from child to parent </button>

                  <h2>{{person | json}}</h2>
                  <h2>{{date}}</h2>
            </div>`,
  styles: [`
    .text-succes{
      color:green;
    }
    .text-danger{
      color:red;
    }
  `]
})
export class TestComponent implements OnInit{
  @Input() public parentData: string;
  @Output() public childEvent = new EventEmitter();
  fireEvent(){
    this.childEvent.emit('heyyy');
  }
  public name ='Ananana';
  public isdisabled =true;
  public successClass = "text-succes";
  public hasError= false;
  public isTrue=true;
  public click ='';
  public date=new Date();
  public person ={
    name:"john",
    last:'doe'
  }
  public unos = "";
  public allClasses = {
    "text-success" : this.hasError,
    "text-danger": this.isTrue
  }


  constructor(){
    this.parentData = '';
  }
  ngOnInit(): void {
    
  }
  greetUser(){
    return "hello " + this.name;
  }
  clickMe(){
    console.log("I am clicked.");
    this.click = "I am clicked."
  }
  isprintajUnos(value:string){
    console.log(value);
  }
}
