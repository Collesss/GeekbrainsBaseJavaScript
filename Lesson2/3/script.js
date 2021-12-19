

let a = +prompt('Введите число a');
let b = +prompt('Введите число b');

let result = null;

if(isNaN(a) || isNaN(b))
    result = 'Введены неверные значение(я).';
else if(a >= 0 && b >= 0)
    result = `разность a и b: ${a - b}`;
else if(a < 0 && b < 0)
    result = `произведение a и b: ${a * b}`;
else // a / Math.abs(a) != b / Math.abs(b)
    result = `сумма a и b: ${a + b}`;

alert(result);