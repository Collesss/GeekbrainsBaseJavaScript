"use strict";

const products = [
    {
        id: 3,
        price: 200
    },
    {
        id: 4,
        price: 900
    },
    {
        id: 3,
        price: 1000
    }
];

//console.log(products);
//products.map(product => product.price *= 0.85);

products.forEach(product => product.price *= 0.85);

console.log(products);
