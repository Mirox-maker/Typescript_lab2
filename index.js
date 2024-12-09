"use strict";
function calculateAverage(numbers) {
    if (numbers.length === 0) {
        throw new Error("Массив не должен быть пустым");
    }
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}
const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(`Среднее арифметическое: ${average}`);
function countValuesInRange(matrix, min, max) {
    let count = 0;
    for (const row of matrix) {
        for (const value of row) {
            if (value >= min && value <= max) {
                count++;
            }
        }
    }
    return count;
}
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const min = 3;
const max = 6;
const count = countValuesInRange(matrix, min, max);
console.log(`Количество значений в интервале [${min}, ${max}]: ${count}`);
function formatTuple(tuple) {
    const [str0, str1, num] = tuple;
    return `${str0} – ${num} – ${str1}`;
}
const myTuple = ["Первое значение", "Второе значение", 42];
const formattedString = formatTuple(myTuple);
console.log(formattedString);
var VegetableOil;
(function (VegetableOil) {
    VegetableOil["Canola"] = "\u0420\u0430\u043F\u0441\u043E\u0432\u043E\u0435 \u043C\u0430\u0441\u043B\u043E";
    VegetableOil["Sunflower"] = "\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E";
    VegetableOil["Olive"] = "\u041E\u043B\u0438\u0432\u043A\u043E\u0432\u043E\u0435 \u043C\u0430\u0441\u043B\u043E";
    VegetableOil["Corn"] = "\u041A\u0443\u043A\u0443\u0440\u0443\u0437\u043D\u043E\u0435 \u043C\u0430\u0441\u043B\u043E";
    VegetableOil["Soybean"] = "\u0421\u043E\u0435\u0432\u043E\u0435 \u043C\u0430\u0441\u043B\u043E";
})(VegetableOil || (VegetableOil = {}));
// Пример использования
const selectedOil = VegetableOil.Olive;
console.log(`Выбранный тип масла: ${selectedOil}`); // Вывод: Выбранный тип масла: Оливковое масло
class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function printPetInfo(pet) {
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
    if (pet instanceof Dog) {
        console.log(`Label: ${pet.label}`);
    }
}
const myDog = new Pet();
const myCat = new Cat();
printPetInfo(myDog);
printPetInfo(myCat);
const MyOil = {
    type: VegetableOil.Olive,
    volume: 1.5,
    price: 120,
    originCountry: "Russia"
};
console.log(JSON.stringify(MyOil, null, 2));
