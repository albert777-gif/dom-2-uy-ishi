//1. Вывести каждый элемент массива в консоль
const fruits = ['apple', 'banana', 'cherry'];

//2. Вывести длину каждого слова в массиве
const words = ['hi', 'hello', 'world'];

////3. Прибавить 10 к каждому числу и вывести результат
//const numbers = [5, 10, 15];

//4. Вывести индекс и значение каждого элемента
//const names = ['Anna', 'Bob', 'Carl'];

//5. Собрать сумму всех чисел 
//const nums = [1, 2, 3, 4, 5];


//1
//console.log(fruits.length); 

//fruits.forEach(fruit => console.log(fruit));


//2
//console.log(words.length);
//words.forEach(word => console.log(word.length));

//3

//const numbers = [5, 10, 15];
//const Number2 = numbers.map(number => number + 10);
//Number2.forEach(number => console.log(number));


//4
//const names = ['Anna', 'Bob', 'Karl'];
//names.forEach((name, index) => console.log(`Index: ${index}, Value: ${name}`));

//5

const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);