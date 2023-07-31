// // Написать функцию, которой передаем, имя, фамилия и
// // возраст, и получаем строку "Привет Иван Петров с
// // возрастом 17" (только здесь данные, которые были
// // переданы в функцию)

// const myName = prompt(`Как вас завут?`);
// const surname = prompt(`Как ваша фамилия?`);
// const age = prompt(`Сколько вам лет?`);

// userHello(myName, surname, age);

// function userHello(myName, surname, age) {
//   alert(`Привет ${myName} ${surname} с возростом ${age}`);
// }

// // Создайте функцию которая возводит переданное число в
// // квадрат

// const myNumber = +prompt(`Введите число.`);

// square(myNumber);

// function square(myNumber) {
//   alert(Math.pow(myNumber, 2));
// }

// // Сделайте функцию, которая параметром принимает
// // число и проверяет, положительное это число или
// // отрицательное. В первом случае пусть функция выводит
// // в консоль текст '+++', а во втором '---'.

// const myNumber1 = +prompt(`Введите число.`);

// chekNumber(myNumber1);

// function chekNumber(myNumber1) {
//   myNumber1 >= 0 ? alert(`+++`) : alert(`---`);
// }

// const number1 = prompt(`Введите первое число?`);
// const number2 = prompt(`Введите второе число?`);
// const number3 = prompt(`Введите третье число?`);

// let param1 = '1';
// let param2 = 2;
// let param3 = 3;

// sumNum(number1, number2, number3);
// sumNum(param1, param2, param3);

// function sumNum(num1, num2, num3) {
//   alert(`Сумма числе = ${+num1 + +num2 + +num3}`);
// }

// // Дана фукнция
// // function func(num = 5) {
// // console.log(num * num);
// // }
// // Расскажите, каким будет результат каждого из вызовов функции.
// // func(2); Ответ 4
// // func(3); Ответ 9
// // func(); Ответ 25

function sqrtNum(num) {
  return Math.sqrt(num);
}

alert(`Cумма двух корней ${sqrtNum(3) + sqrtNum(4)}`);

function minNumber(num1, num2) {
  return Math.min(num1, num2);
}

alert(`Минимальное число ${minNumber(3, 4)}`);
