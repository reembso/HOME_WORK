//task1
let year = 2023
if (year > 2015) {
    alert(year)
}

//task2
let num1 = 10
let num2 = 10
let result = num1 - num2
if (result === 0) {
 alert(`${result}result`)
}

//task3
let guetion = prompt("Какое «официальное» название JavaScript?")
if (guetion === "ECMAScript") {
    alert("Верно!")
}
else{
    alert('Не знаете? ECMAScript!')
}

//task4
let a = +prompt('Введите число');
let b = +prompt('Введите число');
if (a + b === 10) {
  alert(a + b);
 } else {
   console.log(a + b);
}

//task5
let yearsOld = confirm("вам есть 18?");
 if (yearsOld ) {
alert('Добро пожаловать')
}
else{alert('Вход запрещен!')}

//task6
let str = 'Javascript'
if (str === 'Javascript') {
    console.log('Frontend');
}
else{
    console.log("backend");
}



//extra tasks

let number = prompt('write number')
switch (number) {
case "1":
    alert('Осень')
    break;

    case "2":
        alert('Зима')
        break;

        case "3":
        alert('Весна ')
        break;

        case "4":
        alert('Лето')
        break;
}



let guestion2 = prompt("Как тебя зовут?")
if (guestion2) {
   let res =  confirm('Вы уверены?')
   if (res) {
    confirm(`Ваше имя - ${guestion2}`)
   }
   else {
    confirm('Попробуйте вспомнить')
   }
}
else {
    alert('Вы отменили действие')
}