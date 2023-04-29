//1 TASK
const personn = { name: "Akylai", age: 16, city: "BISHKEK" };

 const { name: personName, age: personAge, city: personCity } = personn;

 console.log(personName);
 console.log(personAge);
 console.log(personCity);


// 2 TASK
 const informationAboutFamousPeople = [
     {
         name: `JohnnyDepp`,
         age:59
     },
     {
         name:`ElonMusk`,
         age:51
     }
 ]
 const {name:firstName,age:firstAge} = informationAboutFamousPeople[0]
 console.log(firstAge);
 console.log(firstName);

//3 TASK
 const obj = {
      numArr : [1,2,3,4,5]
   }
   const {numArr:[firstNum,secondNum]} = obj
   console.log({firstNum,secondNum})

//4 TASK
const human = {
    name: 'SEIYT',
    age: 18
  };
  
  const {name: name1} = human;
  const newPerson = {name1};
  
  console.log(newPerson);
  
// 5 TASK
let girl = {
  name: `Aliman`,
  age: 16,
  city: `NARYN`,
};
function fnSayInformation() {
  let { name: girlName, age: girlAge, city: girlCity } = girl;
  console.log(girlName, girlAge, girlCity);
}
fnSayInformation();

//6 TASK
 const numbers1 = [1, 2, 3];
 const numbers2 = [4, 5, 6];
 const allNumbers = [...numbers1, ...numbers2];
 console.log(allNumbers);

//7 TASK
let person1 = {
  name: `meka`,
  age: 17,
};

 let person2 = {
   city: `Karakol`,
   gender: `male`,
 };
 const newPersonn = { ...person1, ...person2 };
 console.log(newPersonn);


 //8 TASK
 const numArray = [1, 2, 3, 4];
 let res;
 function returnNewArray() {
   return (res = [...numArray, 0]);
 }
 returnNewArray(numArray);
 console.log(res);

//9 TASK 
let persoon = {
  name: `lili`,
  age: 10,
 };
 const newPersoon = { ...persoon, city: `tashkent` };
 console.log(newPersoon);


 //10 TASK
function infoLolita(p) {
    return   { ...p}
}

const p = {
   name: `lolita`,
   age: 13,
   city: `paris`,
 };
 const infoo = infoLolita(p);
console.log(infoo);


//11 TASK
let perrson = {
    name: `maria`,
    age: 19,
    city: `moskow`,
  }

    const   {
     city,...newP
    }  = perrson 

    
    console.log(newP);

//12 TASK
const numbers = [1, 2, 3, 4, 5];
const [first, ...all] = numbers;
const newArray = [first, ...all];

console.log(newArray);


//13 TASK
const person11 = {
    namee: 'malik',
    agee: 30,
  };
  
  const person22 = {
    cityy: 'Paris',
    gendeer: 'male',
  };
  
  const { namee } = person11;
  const { cityy, gendeer } = person22;
  
  const newwPerson = {
    namee,
    ...person22,
  };
  
  console.log(newwPerson); 
  
  
//14 TASK
const personnn = {
    name: 'Akylai',
    age: 15,
    hobbies: ['sleep', 'read'],
  };
  
  const { hobbies, ...newwwPerson } = personnn;
  
  const newPerrrson = {
    ...newwwPerson,
    hobbies: [...hobbies],
  };
  
  console.log(newPerrrson);
  
// 15 TASK
 const person = {
   name: 'Kate',
   age: 20,
   city:`Newyork`
 }
 function getInfo(person) {
   const { name, age, city } = person;
   return `${name} ${age} ${city} Country: USA`;
 }
 const info = getInfo(person);
 console.log(info); 