
let a = 1
let x = 1 + (a *= 2);

/*
a будет равно 2 а
x будет равно 3 т.к.
в выражении 1 + (a *= 2) сначало будет выполнено подвыражение (a *= 2) т.к. оно находится в скобках т.к. у выражений находящихся в скобках приоритет выше чем у остальных операторов
опрератор *= берёт значение из левого операнда умножает его на значение из правого операнда и после присваивает полученное значение переменной из левого операнда сам же оператор
*= возвращает полученное значение в рузультате умножения то есть получается переменная a будет умножена на 2 и за место выражения (a *= 2) будет подставленно значение 2
далее будет выполнен оператор + и он сложит значение 1 и значение полученное в результате вычисления выражения то есть получится 1 + 2 а результат будет 3 далее оператор =
присвоит это значение пременно x и функция console.log выведет значения этих переменных.
*/
console.log(a);
console.log(x);