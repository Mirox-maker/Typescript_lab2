function calculateAverage(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error("Массив не должен быть пустым");
    }

    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / numbers.length;
}

const numbers = [1, 2, 3, 4, 5];
const average = calculateAverage(numbers);
console.log(`Среднее арифметическое: ${average}`);




function countValuesInRange(matrix: number[][], min: number, max: number): number {
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





type MyTuple = [string, string, number];

function formatTuple(tuple: MyTuple): string {
    const [str0, str1, num] = tuple;
    return `${str0} – ${num} – ${str1}`;
}

const myTuple: MyTuple = ["Первое значение", "Второе значение", 42];
const formattedString = formatTuple(myTuple);
console.log(formattedString);





enum VegetableOil {
    Canola = "Рапсовое масло",
    Sunflower = "Подсолнечное масло",
    Olive = "Оливковое масло",
    Corn = "Кукурузное масло",
    Soybean = "Соевое масло"
}

// Пример использования
const selectedOil: VegetableOil = VegetableOil.Olive;
console.log(`Выбранный тип масла: ${selectedOil}`); // Вывод: Выбранный тип масла: Оливковое масло



class Pet {
    name: string = 'Some pet';
    age: number = -1;
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}


function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}`);
    console.log(`Age: ${pet.age}`);
    console.log(`Speak: ${pet.speak()}`);
    if (pet instanceof Dog) {
        console.log(`Label: ${(pet as Dog).label}`);
    }
}
const myDog = new Pet();
const myCat = new Cat();

printPetInfo(myDog);
printPetInfo(myCat);

type CookingOil={
    type: VegetableOil;
    volume: number;
    price: number;
    originCountry: String;
};

const MyOil: CookingOil={
    type: VegetableOil.Olive,
    volume: 1.5,
    price: 120,
    originCountry: "Russia"
};

console.log(JSON.stringify(MyOil, null, 2));