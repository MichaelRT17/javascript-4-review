// Context
// Keeping track of where code was ran
// this key word

// Implicent
// The Gold Standard case
// You are using a method on an object

let brack = {
    hunger:50,
    money:100,
    eatSushi:function(){
        console.log(this);
      if (this.hunger >=10 && this.money >=10){
        this.hunger -= 10;
        this.money -= 10;
      }
    } 

  }
  let brackEatsSushi = brack.eatSushi;
console.log(brack);
brack.eatSushi();
// brackEatsSushi()

console.log(brack);
  
  // Explicit
  // Can force it to be applied to any object
  // Usually used when we are binding to an event 
  // so that it doesn't implicetly use the button we 
  // attach the event to
  
  let joe = {
    hunger:50,
    money:100
  }
  
  let forceJoeToEatSushi = brack.eatSushi.bind(joe);
  
  forceJoeToEatSushi()
  forceJoeToEatSushi()
  forceJoeToEatSushi()
  forceJoeToEatSushi()
  forceJoeToEatSushi()
// console.log(joe)
  


  // New
  // When we make a new Class or Prototype function
  // We use the new keyword to get a new instance
  // to use
  
  
  // Default
  // The worthless case
  // Seriously, if you're using this
  // in the default context there is
  // a 99.9% chance that you made a mistake
  // and ment to do implicit or explicit
  // The default context for a function
  // Depends on the environment, it may be
  // the process, the window, or undefined 
  // depending on what environment is
  // node / browser / strict mode
  // In all cases, you don't actually want it
  
  function justAFunction(){
    console.log(this);
    console.log(process);
  }
  
  justAFunction()