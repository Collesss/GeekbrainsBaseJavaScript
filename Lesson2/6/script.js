'use strict';

/**
 * Функция возвращает слово рубль в правильном падеже в зависимости от переданного числа
 * @param {Number} value - число для которого нужно определить падеж
 * @throws {Error} - исключение выбрасывается если параметр не является числом
 * @returns {String} строка в правильном падеже
 */
function GetRightCase(value)
{
    if(typeof(value) !== 'number')
        throw new Error('Ошибка переданный параметр не является числом');

    let strValue = String(value);
    let beforeLastDigit = strValue.charAt(strValue.length - 2);
    let lastDigit = strValue.charAt(strValue.length - 1);

    if(beforeLastDigit === '1' && lastDigit !== '0')
        return 'рублей';
    else
        switch(lastDigit)
        {
            case '1':
                return 'рубль';
            case '2':
            case '3':
            case '4':
                return 'рубля';
            case '0':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                return 'рублей';
        }
}


let value = parseInt(prompt('Введите сумму для зачисления'));

let message = isNaN(value) ? 'Вы ввели число в неправильном формате.' : `Ваша сумма в ${value} ${GetRightCase(value)} успешно зачисленна.`

alert(message);
