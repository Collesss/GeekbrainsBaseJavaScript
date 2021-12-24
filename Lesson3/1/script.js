"use strict";

for(let i = 0; i <= 10; i++) {
    
    let message = 'это ноль';

    if(i != 0)
        message = `${i%2 == 0 ? 'чётное' : 'нечётное'} число`;

    console.log(`${i} - ${message}`);
}