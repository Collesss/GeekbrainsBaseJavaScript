
/*
1. 10 складываем с 10 получаем 20
2. 20 складываем с "10" получаем "2010" т.к. один из операндов явяется строкой
3. "2010" присваиваем переменной relust1
4. с помощью console.log выводим переменную result1 в консоль
*/
let result1 = 10 + 10 + "10";
console.log(result1);

/*
1. 10 складываем с "10" получаем "1010" т.к. один из операндов явяется строкой
2. "1010" складываем с 10 получаем "101010" т.к. один из операндов явяется строкой
3. "101010" присваиваем переменной relust2
4. с помощью console.log выводим переменную result2 в консоль
*/
let result2 = 10 + "10" + 10;
console.log(result2);

/*
1. сначала выполняется выражение +"10" т.к. у унарного плюса приоритет выше чем у бинарного в результате получаем 10 т.к. если операндом унарного плюса является строка 
    то он попытается преобразовать значение в строке в число
2. 10 складываем с 10 получаем 20
3. 20 складываем с 10 получаем 30
4. 30 присваиваем переменной relust3
5. с помощью console.log выводим переменную result3 в консоль
*/
let result3 = 10 + 10 + +"10";
console.log(result3);

/*
1. сначала выполняется выражение -"" т.к. у унарного минуса приоритет выше чем у деление в результате получаем -0 т.к. если операндом унарного минуса является строка 
    то он попытается преобразовать значение в строке в число и изменить знак у этого числа на противоположный и если формат строки не соотвествует числу то результатом
    выполнения операции будет NaN при этом если в строке нет символов или если она состоит только из пробелов то результатом операции будет уже -0
2. 10 делим на -0 получаем -Infinity т.к. при делении положитльного числа на -0 в JS результатом будет -Infinity
3. -Infinity присваиваем переменной relust4
4. с помощью console.log выводим переменную result4 в консоль
*/
let result4 = 10 / -"";
console.log(result4);

/*
1. сначала выполняется выражение +"2,5" т.к. у унарного плюса приоритет выше чем у бинарного в результате получаем NaN т.к. если операндом унарного плюса является строка 
    то он попытается преобразовать значение в строке в число и если формат строки не соотвествует числу то результатом
    выполнения операции будет NaN при этом если в строке нет символов или если она состоит только из пробелов то результатом операции будет уже 0
2. 10 делим на NaN получаем NaN т.к. при выполнении любых математических операций с NaN результат всегда будет NaN
3. NaN присваиваем переменной relust5
4. с помощью console.log выводим переменную result5 в консоль
*/
let result5 = 10 / +"2,5";
console.log(result5);