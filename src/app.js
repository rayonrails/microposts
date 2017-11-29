// Import using destructuring
import { person, sayHello } from './lib';
alert(`Hello ${person.name}`);
console.log(sayHello('Brad'));

// Import all as object
// import * as lib from './lib';
// alert(`Hello ${lib.person.name}`);
// console.log(lib.sayHello('Brad'));

// Import default value
// import name from './lib';
// alert(name);

async function getPosts(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts));