let array = [1, 2, 3]
let array2 = [4, 5, 6]
//task1
console.log(array.concat(array2));

//task2
console.log(array.reverse());

//task3
let arrayy = [1, 2, 3]
 arrayy.push(4,5,6)
console.log(arrayy);

//task4
let arrayyy = [1, 2, 3]
arrayyy.unshift(4,5,6)
console.log(arrayyy);

//task5
let stringArray =  ['js', 'css', 'jq']
let firstElem = stringArray.slice(0,1 ).shift();
console.log(firstElem);

//task6
let lastElem = stringArray.pop()
console.log(lastElem)

//task7
let arr = [1, 2, 3, 4, 5]
let res = arr.slice(3)
console.log(res);

//task8
let aray = [1, 2, 3, 4, 5]
aray.splice(1,2)
console.log(aray);

//task9
let a = [1, 2, 3, 4, 5]
  let b = a.splice(1,3)
console.log(b);

//task10
let ar = [1, 2, 3, 4, 5]
let r = ar.splice(3,0,`'a', 'b', 'c'`)
console.log(ar);

//task11
let arrr = [1, 2, 3, 4, 5]
 arrr.splice(1,0,'a', 'b',)
 arrr.splice(6,0,'c',)
 arrr.splice(8,0,'e')
console.log(arrr);