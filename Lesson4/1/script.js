"use strict";

/**
 * Функция возвращает объект с разрядами переданного числа в параметре 
 * @param {String} value - строка которую нужно преобразовать в число и записать разряды этого числа в объект
 * @returns {Object} - возвращается объект со свойствами {units, tens, hundereds} если переданную строку можно привести к целому число и если это число больше или равно 0 и меньше 1000 иначе возвращается пустой объект 
 */
function getObjectWithRanksDigitsNumber1(value) {

    let num = Number(value);

    if(isNaN(num) || value === null || !Number.isInteger(num) || !(num >= 0 && num < 1000))
    {
        console.log("переданное значение не является целым числом или находится вне диапазона 0..999");
        return {};
    }

    return {
        units: num % 10,
        tens: (num = Math.floor(num / 10)) % 10,
        hundereds: (num = Math.floor(num / 10)) % 10
    };
}

/**
 * Функция возвращает объект с разрядами переданного числа в параметре 
 * @param {String} value - строка которую нужно преобразовать в число и записать разряды этого числа в объект
 * @returns {Object} - возвращается объект со свойствами {units, tens, hundereds} если переданную строку можно привести к целому число и если это число больше или равно 0 и меньше 1000 иначе возвращается пустой объект 
 */
 function getObjectWithRanksDigitsNumber(value) {

    value = String(value);

    if(!/^\d{1,3}$/.test(value))
    {
        console.log("переданное значение не является целым числом или находится вне диапазона 0..999");
        return {};
    }

    return {
        units: Number(value.charAt(value.length-1)),
        tens: Number(value.charAt(value.length-2)),
        hundereds: Number(value.charAt(value.length-3))
    };
}

console.log(getObjectWithRanksDigitsNumber("999"));
console.log(getObjectWithRanksDigitsNumber(999));
console.log(getObjectWithRanksDigitsNumber(99));
console.log(getObjectWithRanksDigitsNumber(9));
console.log(getObjectWithRanksDigitsNumber(null));