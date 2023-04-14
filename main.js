//TASK1
function sumFn(a,b) {
    return a + b
}
console.log(sumFn(2,2));

//TASK2
function changeFn(str) {
const newStr = str[0].toUpperCase() + str.slice([1])
console.log(newStr);
}
changeFn(`string`)

//TASK3
function arrayFn(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 1);
    }
    return result;
}
console.log(arrayFn([1,2,3,4,5]));

//TASK4
function simbolFn(str,char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
let result = simbolFn(`bibibingo`,`b`)
console.log(result);

//TASK5
function summaFn(arr) {
  let summa = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      summa += arr[i];
    }
    return summa;
  }
  console.log(summa);
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(summaFn(array));

//TASK6
function dobleChar(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i] + str[i];
  }
  return result;
}
console.log(dobleChar(`akuse`));

//TASK7
function withZero(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(Math.max(0, arr[i]));
  }
  return result;
}
console.log(withZero([-1, 3, 4, -5]));

//TASK8
function isNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isNumber(2));

//TASK9
function fnArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * arr[i]);
  }
  return result;
}
console.log(fnArray([1, 2, 3, 4, 5, 6]));

//TASK10

//TASK11
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let sortedStr1 = str1.split("").sort().join("");
  let sortedStr2 = str2.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams(`neerg`, `green`));

//TASK12
function twoElements(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(twoElements([1, 2, 3, 4], [0, 2, 9, 4]));

//TASK13
function replaceElem(str) {
  let glasnye = "aeiouAEIOU";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (glasnye.includes(str[i])) {
      result += "*";
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(replaceElem(`child`));

//TASK14
function reverseStrings(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    const reversed = str.split("").reverse().join("");
    result.push(reversed);
  }
  return result;
}

console.log(reverseStrings(["I", "belive", "I", "can"]));
