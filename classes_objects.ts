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
