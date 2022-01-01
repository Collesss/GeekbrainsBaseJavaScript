"use strict";

class Product {
    /**
    * Функция конструктор возвращающая прродукт
    * @param {String} name - имя продукта
    * @param {Number} price - цена продукта
    */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    /**
    * Функция делает скидку 25 процентов на текущую цену товара
    */
    make25PercentDiscount() {
        this.price *= 0.75;
    }
    
    /**
    * Функция возращает строку с инф. о товаре
    * @returns {String} - строка с инф. о товаре
    */
    info() {
        return `product: ${this.name}; price: ${this.price};`;
    }
}

let prod = new Product("test1", 100);
console.log(prod.info());
prod.make25PercentDiscount();
console.log(prod.info());