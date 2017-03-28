#!/usr/bin/env node

// console.log("Test for terminal");


// Create a function that will perform a cheer

const myCheer = (nameToCheer) => {


  // Take the value passed into the function and set it to uppercase using .toUpperCase() which is a 
  // method that returns the calling string value converted to all upper case letters

  let cheerToCaps = nameToCheer.toUpperCase();


  // Take what is now an uppercase string and turn it into an array using The Array.from() method, 
  //  which  creates a new Array instance from an array-like or iterable object.

// Example from MDN: 

//const bar = ["a", "b", "c"];
// Array.from(bar);
// ["a", "b", "c"]

// Array.from('foo');
// ["f", "o", "o"]


  let cheerToArray = Array.from(cheerToCaps);

  myCheer("Bob Ross");



  
// logged to the console/terminal


  for(var i = 0; i < cheerArray.length; i++) {
    let thisLetter = cheerArray[i];
    if(cheerArray[i] === "A" | "E" | "I" | "O" | "U") {
      //delay by one second
      //for each index value, multiple it by one second to get a staggerd
      //one second delay for each interation through the loop
      setTimeout(()=>console.log(`Give me an ${thisLetter}`), (1000 * i));
      } else if(cheerArray[i]=== " ") {

      } else {
       setTimeout(()=>console.log(`Give me a ${thisLetter}`), (1000 * i));
      }
    }
    setTimeout(()=>console.log(`What's that spell?`), (1000 * (cheerArray.length + 1)));
    setTimeout(()=>console.log(`${cheerCaps}!`), (1000 * (cheerArray.length + 2)));
    // console.log(`${cheerCaps}!`);
  }
