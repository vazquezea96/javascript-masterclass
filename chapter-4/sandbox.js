// functions & methods
// function declaration
// function greet() {
//     console.log('Hello World');
// }

// function expression 
// const speak = function (name="Luigi", time="Night") {
//     console.log(`Good ${time} ${name}!`);  
// };


// speak("Mario", "Morning");
// speak(); // invokes the default value if none passed in.


// const calcArea = function(radius) {
//     return 3.14 * radius ** 2;
// };

// // Arrow Functions
// const calcArea = radius => 3.14 * radius ** 2;

// const area = calcArea(5);
// console.log('area is: ', area);

// Practice arrow functions

// const greet = _ => `hello world`;

// const greeting = greet();
// console.log(greeting);

// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([10, 15, 30], 0.2));

// const name = "eduardo";

// functions

// const greet = () => "Hello";

// let resultOne = greet();
// console.log(resultOne);

// methods
// const resultTwo = name.toUpperCase();
// console.log(resultTwo);

// callbacks & foreach

// const myFunc = (callbackFunc) => {
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(function (value) {
//     // do something
//     console.log(value);
// });

// get a reference to the 'ul'
const ul = document.querySelector('.people');

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// };

people.forEach(function (person) {
    // create html template
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
