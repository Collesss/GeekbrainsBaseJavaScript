"use strict";

/**
 * Функция конструктор возвращающая прродукт
 * @param {String} name - имя продукта
 * @param {Number} price - цена продукта
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

//Product.prototype.make25PercentDiscount = () => this.price *= 0.85;
/**
 * Функция делает скидку 25 процентов на текущую цену товара
 */
Product.prototype.make25PercentDiscount = function() {
    this.price *= 0.75;
};

//Product.prototype.info = () => `product: ${this.name}; price: ${this.price};`;
/**
 * Функция возращает строку с инф. о товаре
 * @returns {String} - строка с инф. о товаре
 */
Product.prototype.info = function() {
    return `product: ${this.name}; price: ${this.price};`;
};

let prod = new Product("test1", 100);
console.log(prod.info());
prod.make25PercentDiscount();
console.log(prod.info());