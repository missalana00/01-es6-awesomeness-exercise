#!/usr/bin/env node 

// WHAT IS THAT ABOVE?

// console.log("Test for terminal");


// Create a function that will perform a cheer that will take the argument of the name you want to
// see cheered in the console in quotes

const myCheer = (nameToCheer) => {


  // Take the value passed into the function (nameToCheer) and set it to uppercase 
  // using .toUpperCase() which is a method that returns the calling string value 
  // converted to all upper case letters.

  let cheerToCaps = nameToCheer.toUpperCase();


  // Take what is now an uppercase string and turn it into an array using The Array.from() method, 
  //  which creates a new Array instance from an array-like or iterable object.

// Example from MDN: 

//const bar = ["a", "b", "c"];
// Array.from(bar);
// ["a", "b", "c"]

// Array.from('foo');
// ["f", "o", "o"]


  let cheerToArray = Array.from(cheerToCaps);

  
// Logged to the console/terminal - How? COME BACK TO THIS!

// Create a for loop that loops through the cheerToArray, incrementing by a letter 
// each time through and establishes that 'thisLetter' is equal to wherever the loop 
// is at index-wise.


  for(var i = 0; i < cheerToArray.length; i++) {

    let thisLetter = cheerToArray[i];


    // Create conditional that states that if the letter at the current 
    // index number is any one of the following (vowels), delay its appearance by 1 second 
    // by using the setTimeout method and multiplying 1000 * 1 to achieve a one second staggered delay through each 
    // iteration of the loop with the statement ('Give me AN ${thisLetter}')

    // Note: The setTimeout() method calls a function or evaluates an expression after
    // a specified number of milliseconds.

    if(cheerToArray[i] === "A" | "E" | "I" | "O" | "U") {


      setTimeout(()=>console.log(`Give me an ${thisLetter}`), (1000 * i));

      // ...but if the letter at the current index number is a space...


      } else if(cheerToArray[i]=== " ") {

      // And finally, if neither of those are true, then the letter  is a consonant, and we want
      //  to simply return that letter with the statement ('Give me A ${thisLetter}'); 
      // then delay timeout by 1 second

      } else {
       setTimeout(()=>console.log(`Give me a ${thisLetter}`), (1000 * i));
      }

      // Now display the string 'What's that spell?'

    }
    setTimeout(()=>console.log(`What's that spell?`), (1000 * (cheerToArray.length + 1)));

      // Display the full name in all caps 

    setTimeout(()=>console.log(`${cheerToCaps}!`), (1000 * (cheerToArray.length + 2)));
    // console.log(`${cheerCaps}!`);
  }


    myCheer("Ali Smith");

