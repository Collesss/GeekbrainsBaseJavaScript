'use strict';

/**
 * функция принимает значение любого типа в качестве параметра и возвращает true если тип параметра является 'number'
 * @param {*} value - значение которое нужно проверить
 * @returns {boolean} - true если value является 'number' иначе false
 */
let IsNum = value => typeof(value) === 'number';

/**
 * Функция проверяет тип параметров и если тип одного или обоих не соответствует 'number' то будет выбрасываться исключение
 * @param {*} p1 - первый параметр
 * @param {*} p2 - второй параметр
 * @throws {Error} - исключение будет выброшено если один или оба параметра не будут являтся числами
 */
let CheckParams = (p1, p2) => {
    
    if(!IsNum(p1) || !IsNum(p2)) 
        throw new Error("Ошибка один или оба параметра не являются числом.")
};

/**
 * фукция возвращает сумму слагаемых
 * @param {Number} addendum1 - первое слагаемое
 * @param {Number} addendum2 - второе слагаемое
 * @throws {Error} - исключение будет выброшено если один или оба параметра не будут являтся числами
 * @returns {Number} сумма
 */
function Sum(addendum1, addendum2) {

    CheckParams(addendum1, addendum2);

    return addendum1 + addendum2;
}

/**
 * фукция возвращает разность уменьшаемого от вычитаемого
 * @param {Number} minuend - уменьшаемое
 * @param {Number} subtrahend - вычитаемое
 * @throws {Error} - исключение будет выброшено если один или оба параметра не будут являтся числами
 * @returns {Number} - разность
 */
function Subtraction(minuend, subtrahend) {

    CheckParams(minuend, subtrahend);

    return minuend - subtrahend;
}

/**
 * фукция возвращает частное делимого от делителя
 * @param {Number} divider - делимое
 * @param {Number} dividend - делитель
 * @throws {Error} - исключение будет выброшено если один или оба параметра не будут являтся числами
 * @returns {Number} - частное
 */
function Division(divider, dividend) {

    CheckParams(divider, dividend);

    return divider / dividend;
}

/**
 * фукция возвращает произведение множителей
 * @param {Number} multiplier1 - первый множитель
 * @param {Number} multiplier2 - второй множитель
 * @throws {Error} - исключение будет выброшено если один или оба параметра не будут являтся числами
 * @returns {Number} - произведение
 */
function Multiplication(multiplier1, multiplier2) {

    CheckParams(multiplier1, multiplier2);

    return multiplier1 * multiplier2;
}