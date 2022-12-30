// u classu mozemo stavljati parametre i metode koji se ticu istih podataaka 

class Point{
    x: number;
    y: number;
    drawFunction1(){
        //.. funckija u classi zove se METOD
        // koristimo this.x da pristupimo tom parametru u klasi
        console.log('x ' + this.x + 'y ' + this.y);
    }

    drawFunction2 = (point: Point) =>{
        //.. funkcija u klasi koristi x i y parametre 
    }
}


//variable of this type class
// ovo je OBJEKAT  I ON JE INSTANCA KLASE (class Point)
let point = new Point(); //alociramo memoriju za tip koji smo napravili sami tj classu
point.x =1;
point.y =2;
point.drawFunction1();


// clasa moze biti HUMAN ali objekat moze biti JOHN, MARRY..

// nacin pravljena instance iznad nije najbolji jer moze biti puno parametara, pa bi bilo puno linija koda
// zato sluze konstruktori - Metodi koji se koriste kada hocemo da kreiramo instancu classe, oni se nalaze u classi

class Point{
    x: number;
    y: number;
    constructor(x?:number, y?:number){
        this.x = x; // parametaru iz classe dodjeljujemo vrijednost koju saljemo u construktoru
        this.y = y; 
    }
}

// kreiranje objekta
let point = new Point(1,2); // dajemo vrijednosti x i y
let point = new Point() //ako ne znamo pocetne vrijednosti onda, u construktoru napravimo da su x i y opcioni

// access modifiers -> public, private
// nacin modifikovanja polja u classi

class Point{
    constructor( private x?:number, private y?:number){
        this.x = x; // parametaru iz classe dodjeljujemo vrijednost koju saljemo u construktoru
        this.y = y; 
    }
    //getter za citanje vrijednosti
    get X(){
        return this.x;
    }
    //setter za setovanje vrijednosti
    set X(value){
        this.x = value;
    }
}

let point = new Point(1,2);
let x = point.X //citam private vrijednost x
point.X = 10; //setujemo vr



