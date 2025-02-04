// object literals

let user = {
    name: 'eddie',
    age: 28,
    email: 'test@email.com',
    location: 'usa',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

// user.age = 29;
console.log(user.age);

const key = 'location';

console.log(user[key]);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);
