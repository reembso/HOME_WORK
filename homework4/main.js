//1task
for (let index = 1; index < 101; index++) {
  console.log(index);
}

//2task
for (let index = 11; index < 34; index++) {
  console.log(index);
}

//3task
for (let index = 0; index < 100; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

//4task
let sum = 0;
for (let index = 0; index < 100; index++) {
  sum += index;
}
console.log(sum);


//5task
let array = [1, 2, 3, 4, 5];
for (let index = 0; index < array.length; index++) {
  const result = array[index];
  console.log(result);
}

//6task
let result = 0;
let sum2 = 0;
for (let index = 0; index < array.length; index++) {
 result = sum2 += array[index]
}
console.log(result);


//7task
let array2 = [2, 5, 9, 15, 0, 4]
for (let index = 0; index < array2.length; index++) {
    const result = array2[index];
    if (result < 10 && result > 3 ) {
        console.log(result);
    }
}

//8task
let array3 = [-1,9,-5,-6,3,5]
let summa = 0
for (let index = 0; index < array3.length; index++) {
   if (array3[index] > 0 ) {
    summa +=array3[index]
   }

}
console.log(summa);


//9task
let array4 = [1, 2, 5, 9, 4, 13, 4, 10];
for (let index = 0; index < array4.length; index++) {
    if (array4[index] == 4) {
    alert('Есть!');
    break;
    }
    }


    //10task
    let array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let ressult = ``
    let r =`-`
    for (let index = 0; index < array5.length; index++) {
   ressult += array5[index]  && r + array5[index]
    }

console.log(ressult);


//tasklast
let reserve = ``
for (let i = 1; i < 5;i ++) {
    reserve += `#`
    console.log(reserve);
}


 