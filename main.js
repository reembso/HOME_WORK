// TASK 1
let num1 = prompt("Введите число 1");
let num2 = prompt("Введите число 2");
let sum = num1 + num2;

switch (sum) {
  case 10:
    alert(10);
    break;
  case 20:
    alert(20);
    break;
  default:
    alert("default");
    break;
}

//TASK2
let month = prompt("Введите название месяца")

switch (month) {
  case "декабрь":
  case "январь":
  case "февраль":
    alert("Месяц относится к зиме");
    break;
  case "март":
  case "апрель":
  case "май":
    alert("Месяц относится к весне");
    break;
  case "июнь":
  case "июль":
  case "август":
    alert("Месяц относится к лету");
    break;
  case "сентябрь":
  case "октябрь":
  case "ноябрь":
    alert("Месяц относится к осени");
    break;
  default:
    alert("Неверное название месяца");
    break;
}

//TASK3
let age = prompt("Введите возраст ученика");
age = parseInt(age);

switch (age) {
  case 6:
  case 7:
    alert("Первоклассник");
    break;
  case 8:
  case 9:
  case 10:
    alert("Ученик из начальной школы");
    break;
  case 11:
  case 12:
  case 13:
    alert("Ученик из средней школы");
    break;
  case 14:
  case 15:
  case 16:
    alert("Ученик из старшей школы");
    break;
  default:
    alert("Не ученик");
    break;
}

//TASK4
const person1 = {
    age: 17,
    firstName: "Akusi",
    lastName: "Zuparova"
  };
  
  console.log("Age:", person1.age);
  console.log("First Name:", person1.firstName);
  console.log("Last Name:", person1.lastName);

  //TASK5
  const arr2 = [1, 2, 3, 4, 5];
console.log( arr2[2])


//TASK6
const person = {};

person.firstName = prompt("Введите имя");
person.lastName = prompt("Введите фамилию");
person.age = prompt("Введите возраст");

console.log("Person:", person);

//TASK7
const input = prompt("Введите значение");
const obj = {};
const arr = [];

if (input === "Объект") {
  obj.value = input;
  console.log("Объект:", obj);
} else if (input === "Массив") {
  arr.push(input);
  console.log("Массив:", arr);
} else {
  console.log("error");
}