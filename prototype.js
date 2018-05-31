
class Square{
    constructor(width){
      this.width = width;
      this.perimeter = function(){
        console.log('the perimeter is ' + this.width*4);
    }
  }
    area(){
        console.log("My Area is " + this.width * this.width);
    }
  }

  let bob = new Square(10);
  let squares = [];
  for (var i=0;i<1000;i++){
    squares.push(new Square(i));
  }

bob.area();
console.log(bob);
bob.area = function(){
    console.log("Bob is the biggest square of them all. Says bob.");
  }
  
  let sally = new Square(50);
  sally.area();
  bob.area();  

// class Car{
//   constructor(){

//   }
//   move(){

//   }
// }

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = 0;
}




let brackCar = new Car('Chevy', 'Cobalt', '2009');
console.log(brackCar);

Car.prototype.move = function(miles){
    this.milage += miles;  
}

brackCar.move(100);
console.log(brackCar);

let ary = [5,2,7,9,4,1,6];

// Array.prototype.sort = function(){
//   console.log("No sort for you");
// }

// ary.sort();
