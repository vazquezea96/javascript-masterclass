// alert('hello, world');
// console.log('Hello, world!');
let age;
let year = 2025;
// console.log('My age is: ', age, 'years old.');
// console.log('The year is: ', year);

const points = 100;
// points = 50; // This will throw an error
// console.log(points);

// template literals
const title = "Daily Bugle";
const author = "Peter Parker";
const likes = 30;

// concat way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';
// console.log(result);

// template string way
let result = `The blog called ${title} by ${author} has ${likes} likes.`;
// console.log(result);

// creating HTML template
let html = `
   <h2>${title}</h2>
   <p>By ${author}</p>
   <span>Thus blog has ${likes} likes</span>
`;

// console.log(html);


// Arrays
let ninjas = ['shaun', 'ryu', 'chun-li'];
// ninjas[1] = 'ken';

let ages = [20, 15, 30, 35];
// console.log(ages);

let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// Array methods
// console.log(ninjas.length);
result = ninjas.join(',');
result = ninjas.indexOf('chun-li');
result = ninjas.concat(['ken', 'crystal']);
ninjas.push('ken');
ninjas.pop();
// console.log(result);
// console.log(ninjas);
age = null;
// console.log(age, age + 3, `the age is ${age}.`);

// booleans & comparisons
// console.log(true, false, "true", "false");

// methods can return booleans
let email = 'lugi@thenetninja.co.uk';
let names = ['mario', 'luigi', 'toad'];

result = email.includes('@');
result = names.includes('luigi');
// console.log(result);

// comparison operators
age = 25;
// console.log(age == 25);
// console.log(age == 20);
// console.log(age != 30);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age => 25);
// console.log(age <= 25);

// loose comparisons
// console.log(age == 25); // only checks value of both ends.
// console.log(age == '25'); // converts type str to int so both value types can be equal.
// console.log(age != 25);
// console.log(age != '25');

//strict comparisons
// console.log(age === 25); // both value and type are same
// console.log(age === '25'); // no type conversion here. checks value & type
// console.log(age !== 25);
// console.log(age !== '25');

// type conversions
let score = '100';

// score = Number(score);
// console.log(score + 1);
// console.log(typeof score);

result = Number('hello');
result = String(50);
result = Boolean(1);
console.log(result);