// control flow
// use loops for cycling through data
 
// use conditions statements for checking conditions

// for loops
// for (let i = 0; i < 5; i++) {
//     console.log('in loop', i);
// }

// console.log('loop done.');

// const names = ['shuan', 'mario', 'luigi'];

// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`
//     // console.log(html);
// }

// while loop
// must declare conditional before the loop starts.
// let i = 0;
// while (i < 5) {
//     console.log('in loop', i);
//     i++; // REMEMBER to increment i or else you will be stuck in a infinite loop!!
// }

// while (i < names.length) {
//     console.log(`value of i is: ${names[i]}`);
//     i++;
// }

// do while loop will run onces before checking the conditional
// i = 1;
// do {
//     console.log('value of i is: ', i);
//     i++;
// } while (i < 5);

// if statements
const age = 26;

if (age > 20) {
    // console.log('you are over 20 years old.');
}

const ninjas = ['shuan', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length >= 4) {
    // console.log("That's a lot of ninjas!");
}

const password = 'p@ss';

if (password.length >= 12 && password.includes('@')) {
    console.log('that password is mighty strong!');
} else if(password.length >= 8 || password.includes('@')) {
    console.log('that password is strong enough!');
}
else {
    console.log('password is not strong enough');
}

// logical NOT (!)

let user = false;

if (user) {
    
}
