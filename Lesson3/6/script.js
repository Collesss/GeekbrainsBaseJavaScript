"use strict";


/*
for(let i = 0; i < 20; i++) {
    
    let message = '*';

    for(let j = 0; j < i; j++)
        message += '*';

    console.log(message);
}

for(let i = 0; i < 20; i++) {
    
    let charArray = ['*'];

    for(let j = 0; j < i; j++)
        charArray.push('*');

    console.log(charArray.join(''));
}
*/

for(let i = 0; i < 20; console.log('*'.repeat(++i)));