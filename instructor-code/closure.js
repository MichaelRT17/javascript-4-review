// Encapsulation
// Keep it seperated
// Lets say we are tracking money for a person
// They can spend an hour working to get 15 dollars
// They can then spend money

let money = 50;

function work(){
  money += 15;
}

function spendMoney(cost){
  money -= cost;
}

work();
work();
work();
spendMoney(30);
// console.log(money);

// This would sort of work, so long as we only ever wanted 
// to keep track of 1 person's money
// It quickly becomes unmanageable if we have 
// multiple people though 

let brackMoney = 50;
let joeMoney = 75;

function joeWork(){
  joeMoney += 15;
}

function brackWork(){
  brackMoney += 15;
}

function brackSpendMoney(cost){
  brackMoney -= cost;
}

function joeSpendMoney(cost){
  joeMoney -= cost;
}

// We could possibly make it a bit better by converting
// it into an array but now we need to either keep track
// of indexes, or we have to search through the personArr
// each time to find the right person, plus make sure
// those arrays start correctly sorted.

let moneyArr = [50, 75];
let personArr = ["Brack", "Joe"];

function arrWork(i){
  moneyArr[i] += 15;
}

function arrSpendMoney(i, cost){
  moneyArr[i] -= cost;
}

// We're going to talk about 2 different ways to do encapsulation
// to keep our code clean and manageable

// Review Scope
// Scope are the variables that our code has access to at any point
// Function level scope through var
// Block level scope through let / const

let global1 = 'I Be Global';
var global2 = 'Also Global';


function outerFunction1(param1){
  let localVariable1 = 'I am local to outerFunction1';
  
  function innerFunction1(param2){
    let localVariable2 = 'I am local to innerFunction1';

    //Which variables can we see here?
  }

  // Which variables can we see here?
}

// Which variables can we see here?



// Retruning functions from inside of functions

function robotFactory(){
  return function(){
    console.log("I am a dancing robot");
  }
}

let wally = robotFactory();
// wally();

// What happens if those functions had variables they could see?

function brandedFactory(name){
  let company = 'Spacely Sprokets'

  return function(danceName){
    console.log(`The robot ${name} dances the ${danceName}.
    This joy and happiness has been brought to you by ${company}.
    Give us all your money...`)
  }
}

// The cool thing is that the data and variables get saved in their
// own little 'snapshot' section of data.

let terminator = brandedFactory('The Terminator');
let r2d2 = brandedFactory('R2-D2');
let marvin = brandedFactory('Marvin the paranoid android');

// terminator('The Robot');
// r2d2('The Robo Boogie');
// marvin('The Moon Walk... sadly');


// These variables can even be changed by the inner functions

function shortTermRobos(){
  let energy = 50;

  return function(){
    if (energy >= 10){
      console.log("Dance robo dance");
      energy -=10;
    }else{
      console.log("Robot out of energy");
    }
  }
}

let batteryPoweredBender = shortTermRobos();
let backupBender = shortTermRobos();

// batteryPoweredBender();
// batteryPoweredBender();
// batteryPoweredBender();
// batteryPoweredBender();
// batteryPoweredBender();
// batteryPoweredBender();
// batteryPoweredBender();
// backupBender();
// backupBender();
// backupBender();
// backupBender();
// backupBender();
// backupBender();
// backupBender();

// Module Pattern

// Sometimes we want to do more than just return a single function
// Instead we can return a bunch of functions (usually on an object)
// that all work with the same data

function fullFeatureRobo(energy){
  

  return {
    dance:function(){
      if (energy >= 10){
        console.log("Dance robo dance");
        energy -=10;
      }else{
        console.log("Robot out of energy");
      }
    },
    powerDown:function(){
      energy += 10;
    },
    displayEnergy:function(){
      console.log(energy);
    }
  }
}

let myRobo = fullFeatureRobo(60);

// myRobo.energy = 500000000000;
// console.log(myRobo.energy);

// myRobo.displayEnergy()
// myRobo.dance()
// myRobo.dance()
// myRobo.dance()
// myRobo.dance()
// myRobo.displayEnergy()
// myRobo.dance()
// myRobo.dance()
// myRobo.dance()
// myRobo.powerDown()
// myRobo.displayEnergy()
// myRobo.powerDown()
// myRobo.dance()
// myRobo.dance()
// myRobo.displayEnergy()
// myRobo.dance()
// myRobo.dance()

// Practice
// Make a counter function that tells the user
// how many times it has been called

function makeCounter(){
  let count = 0;

  return {
    count: function(){
      count++;
      console.log(`This function has been calld ${count} times.`);
    },
    reset:function(){
      count = 0;
    }
  }
}

let countacula = makeCounter();
countacula.count()
countacula.count()
countacula.count()
countacula.reset()
countacula.count()
countacula.count()