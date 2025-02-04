// object literals

// const blogs = [
//     { title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 },
// ]

// let user = {
//   name: "eddie",
//   age: 28,
//   email: "test@email.com",
//   location: "usa",
//   blogs: [
//     { title: "why mac & cheese rules", likes: 30 },
//     { title: "10 things to make with marmite", likes: 50 },
//   ],
//   login: function () {
//     console.log("the user logged in.");
//   },
//   logout: function () {
//     console.log("the user logged out.");
//   },
//   logBlogs: function () {
//     // console.log(this.blogs);
//     console.log("this user has written the following blogs:");
//     this.blogs.forEach((blog) => {
//       console.log(blog);
//     });
//   },
// };

// user.logBlogs();
// console.log(user.login());
// console.log(user.name);
// console.log(user.logout());

// // user.age = 29;
// console.log(user.age);

// const key = 'location';

// console.log(user[key]);
// user['name'] = 'chun-li';
// console.log(user['name']);

// console.log(typeof user);

// Math Object
// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

// random numbers
// const random = Math.random();

// console.log(random);
// console.log(Math.round(random * 100));

// Primitive Types:
// - numbers
// - strings
// - booleans
// - null
// - undefined
// - symbols

// Reference Types:
// - all types of objects
// - object literals
// - arrays
// - functions
// - dates
// - all other objects

// primitive values 
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// reference values

userOne = { name: 'ryu', age: 30 };
userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);
