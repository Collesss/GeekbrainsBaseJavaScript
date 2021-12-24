"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "1.jpg"
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78
    }
];

const productsWithPhoto = products.filter(product => "photos" in product && product.photos.length > 0);

products.sort((productLeft, productRight) => productLeft.price - productRight.price);

console.log(products);
console.log(productsWithPhoto);