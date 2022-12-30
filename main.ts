//let vidljiva samo u tom bloku ili u toj for petlji dok je var varijabla vidljiva i izvan 
//const varijabla ima ista pravila za scoping kao let varijabla
//const ne moze se mijenjati vrijednost nakon deklaracije, i mora se odmah inicijalizirati kada se navodi
// var varijabla je kao za globalnu inicijalizaciju


function mess(message){
    console.log(message)
}

var m = 'Hello world';
mess(m);

//type in typescript
let count = 5; //number
// count = 'a';  // not allowed in ts but it is ok in js

//let a; //type: any
let b: number; // we said that it would be number
let c: boolean;
let d: string;
let e: any;
let f: number[] = [1,2,3];
let g: any[] = [1, true, 'a'];


// when we have different variables but similar we can put them together
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
// we put all related constatnts in container - enum
enum Color {
    Red = 0,
    Green = 1,
    Blue = 2,
    Purple = 3, //we can add some more
}
let pickZero = Color.Red;

//on variable we have different builtin functions so we will use endsWith
let message;  //any
message = 'abc'; //string

//let endWithC = message. it doesn't recognise message as something that can have different builtin functuions so we need to say explicitly what type it is, and then use some function
let endWithC = (<string> message).endsWith('c');
let anotherWay = (message as string).endsWith('c');


//in javascript
let logInJs = function(message){
    console.log(message);
}

//in typescript, we can miss function keyword and add =>
let logInTs = (message) => {
    console.log(message);
}

