// Задание 1
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const powNumber = (num1, num2) => Math.pow(num1, 3) + Math.pow(num2, 3);

console.log(`Результат 2^3 + 3^3 = ${powNumber(2, 3)}`);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

const wages = prompt("Введите заработную плату:");

const finalWages = (wages) => wages * 0.87;

+wages !== NaN
  ? console.log(
      `Размер заработной платы за вычетом налогов равен ${finalWages(wages)}`
    )
  : console.log("Значение задано неверно.");
