

// sta ako imamo puno parametara koje treba proslijediti funkciji 
// grupu ovih parametara mozemo enkapsulirati i proslijediit jedan objekat
let drawPoint1 = (x,y,z) => {
    //..
}


//2.  
let drawPoint2 = (point) => {
    //..
}
//objekat saljemo kao parametar
drawPoint2({
    x:1,
    y:2,
    z:3,
})

//3. problem sa implementacijom jeste ako stavimo da je neki od parametara npr string
// inline anotacija, da direktno kazemo koji se smije koristiti tip 
let drawPoint3 = (point: {x:number, y:number}) => {
    //..
}


//4. interface
// uvijek pocinju velikim slovom Point
// interfejsi grupisu parametre medjutim imati parametre i funkcije sa istim tim parametrima na vise mjesta -> rusi se konzistentnost podataka
// da ne bi bilo inkonzistentnosti umejsto interfaca koriste se classe
interface Point{
    x: number,
    y: number,
}

let drawFunction1 = (point: Point) => {
    //..
}

let drawFunction2 = (point: Point) =>{
    //..
}