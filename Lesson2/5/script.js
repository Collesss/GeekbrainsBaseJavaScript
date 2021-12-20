
/**
 * Функция получает на вход два числа arg1 и agr2 производит над ними соответствующую математическую опрецию которая зависит от параметра operation и возвращает результат операции
 * @param {Number} arg1 - первое число
 * @param {Number} arg2 - второе число
 * @param {String} operation - операция производимая над числами может принимать одно из значений: sum, subtraction, division, multiplication.
 * @throws {Error} - исключение будет выброшено если передана неверная операция или если один или оба аргумента не являются числами.
 * @returns {Number} результат операции
 */
function mathOperation(arg1, arg2, operation) {
    switch(operation)
    {
        case 'sum':
            return Sum(arg1, arg2);
        case 'subtraction':
            return Subtraction(arg1, arg2);
        case 'division':
            return Division(arg1, arg2);
        case 'multiplication':
            return Multiplication(arg1, arg2);
        default:
            throw new Error('Операция задана неверно.');
    }
}

console.log(mathOperation(20, 10, 'sum'));
console.log(mathOperation(20, 10, 'subtraction'));
console.log(mathOperation(20, 10, 'division'));
console.log(mathOperation(20, 10, 'multiplication'));
console.log(mathOperation(20, 10, 'Test exception'));