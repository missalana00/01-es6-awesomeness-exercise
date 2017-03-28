
// Below is the way Joe Shepherd completed the exercise. 


console.log("Hello, world!");

// Cheer

const first = 'Joe'; //const
const second = 'Shep'; //const

// Object literal shorthand

const myName = { first, second }  //const , making an object out of the above two variables and
// then passing the object into the function below

// Passing an object in below instead of individual arguments
                              
const nodeCheer = ({first, second}) => { // destructuring assignment

  // Function is saying let name = template literal 

  let name = `${first} ${second}`.toUpperCase(); // string template literals, let

  [...first, ...second].forEach( (letter) => { // spread operator and fat arrow function

    let conj = 'aeioufhlmnrsx'.includes(letter.toLowerCase()) ? 'an' : 'a' // `includes()`. Surprise! It's ES6

    console.log(`Gimmmie ${conj} ${letter.toUpperCase()}!`); // string template literals again
  });

  console.log(`What's that spell?\n${name}!`);

};

nodeCheer(myName);
