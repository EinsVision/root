console.log("push codes from codesandbox.");

// comparison operator
const comparisonOperator1 = 1;
const comparisonOperator2 = '1';

let equal = comparisonOperator1 == comparisonOperator2; // not inspect type
console.log(equal);

equal = comparisonOperator1 === comparisonOperator2;
console.log(equal);

const nullString = null;
const undefinedString = undefined;

equal = nullString == undefinedString;
console.log(equal);

equal = nullString === undefinedString;
console.log(equal);

const string1 = '안녕';
const string2 = '하세요';

console.log( string1 + string2 );

// condition if else else if
const condition = 1;
if(condition + 1  === 2){
  console.log('condition + 1 = 2');

  const condition = 2;
  console.log('condition value is ', condition);
}

console.log('condition outside block is ', condition);

const conditions = 10;

if( condition > 15) {
  console.log('condition is bigger than 15');
} else{
  console.log('condition is less than 15');
}

// switch case

const device = 'iPhone';
switch ( device ){
  case 'iPhone': 
    console.log('iPhone');
    break;
    // if we don't use break, all cases are played.
  case 'iPad': 
    console.log('iPad');
    break;

  default:
    console.log('idk');
}

// function
function add (num1, num2){
  return (num1 + num2);
}

console.log(add(2,3));

function hello(name){
  console.log('Hello ',name);
}

hello('jcdlove');

// ES6 
function hello1(name){
  console.log(`Hello ${name}`);
}

hello1('jcdlove');

function getGrade(score){
  if(score === 100){
    return 'A+';
  } else if (score >= 90){
    return 'A';
  } else if (score >= 80){
    return 'B+';
  } else {
    return 'F';
  }
}

const grade = getGrade(84);
console.log(grade);

// ES6 function form (arrow function)
const addArrow = (num1, num2) => {
  return num1 + num2;
}
console.log(addArrow(2,4));


const addArrow2 = (num1, num2) => num1 + num2;
console.log(addArrow2(2,3))

// Object
const dog = {
  name: 'space',
  age: 2,
  cute: true,
  friends: {
    a: 'nick',
    b: 'posh'
  }
}

console.log(dog.friends.a);

// ES6 객체구조 분해 / 객체 비구조화 할당
const captianAmerica = {
  name: 'Steve',
  actor: 'Chris',
  alias: 'captian'
}

function printHero(hero){
  const text = `${hero.name} is ${hero.actor}. nickname is ${hero.alias}.`;
  console.log(text);
}

printHero(captianAmerica);

function printHero2(hero){
  const {name, actor, alias} = hero;
  const text = `${name} is ${actor}. nickname is ${alias}.`;
  console.log(text);
}

printHero2(captianAmerica);

function printHero3({ name, actor, alias }){
  const text = `${name} is ${actor}. nickname is ${alias}.`;
  console.log(text);
}

printHero3(captianAmerica);

// function inside object
const cat = {
  name: 'meow',
  sound: 'meow',
  say: function say(){
    console.log(this.sound);
  }
  // but now working... don't use this in arrow function. 
  // say: () => { console.log( this.sound) }
}

cat.say();

const {sound} = cat;
console.log(sound); 

// getter, setter function in object
const numbers = {
  a: 1,
  b: 2,
  get sum(){
    console.log('sum function called');
    return this.a + this.b;
  },
  
};

numbers.a = 5;
console.log(numbers.sum);

const dog1 = {
  _name: 'bulldog',
  set nameSet(name){
    this._name = name;
  },
}

dog1.nameSet = 'poodle';
console.log(dog1._name);

const numbers1 = {
  _a: 1,
  _b: 2,
  sum: 0,

  get a() {
    return this._a;
  },

  get b() {
    return this._b;
  },

  calc() {
    console.log('calc');
    this.sum = this._a + this._b;
  },

  set a(value){
    this._a = value;
    this.calc();
  }
}

numbers1.a = 3;
console.log(numbers1.sum);

// array
const array = [12,3,4,5,0,6, 'arry Text', {name: 'Teddy'}];
console.log(array[7]); // if the array overflowed, shows undefined 

const animal = [
  {name: 'dog'},
  {name: 'cat'}
]

console.log(animal[0].name);

animal.push({
  name: 'bird'
}); 

console.log(animal);

console.log(animal.length);

// loop while, do while, for, for each

console.log('acsend for loop');

for ( let i = 0;  i < 10; i++){
  console.log(`hello ${i}`);
}

console.log('descend for loop');

for ( let i = 10;  i > 0; i--){
  console.log(`hello ${i}`);
}

// for loop & array
const names =['dog1', 'dog2', 'dog3'];

for(let i =0; i < names.length; i++){
  console.log(names[i]);
}

// while loop
let i = 0;
while (i < 10){
  i++;
  console.log(`while loop ${i}`);
}

// for ~ of  (this loop is used with array)
const numbers2 = [10,20,30,40,50];
for(let number of numbers2){
  console.log(number);
}

// for ~ in ( this loop is used with object)
const numbers3 = [10,20,30,40,50];
const doggy = {
  name: 'dogs',
  sound: 'bark bark',
  age: 2,
};

console.log(Object.keys(doggy));    // ["name", "sound", "age"]
console.log(Object.values(doggy));  // ["dogs", "bark bark", 2]
console.log(Object.entries(doggy)); // [Array(2), Array(2), Array(2)]

// for ~ in ( this loop is used with object)
for(let key in doggy){
  console.log('key: ', key);
}

for(let key in doggy){
  console.log(`${key} : ${doggy[key]} `);
}

// break continue
for(let i =0; i < 10; i++){
  if(i === 2){
    continue;
  }
  console.log(i);
  if( i === 5){
    break;
  }

}

function sumOf(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}

const res = sumOf(numbers3);
console.log(res);

// return bigger than 3 

function biggerThanThree(numbers){
  let sum = [];
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] >= 30){
      console.log('if(i >= 30)');
      sum.push(numbers[i]);
    }
  }
  return sum;
}

const res1 = biggerThanThree(numbers3);
console.log(res1);

// array inner functions (forEach)
const superHeros = [
  '아이언맨',
  '캡틴아메리카',
  '헐크',
  '토르',
  '닥터 스트레인지',
]

function printHero(hero) {
  console.log(hero);
}

superHeros.forEach(printHero);
console.log( ' -------------- forEach method');

superHeros.forEach( (hero) => {
  console.log(hero);
})

// array inner functions (map)
const numbers4 = [1,2,3,4,5,6,7,8];
const squared = [];

numbers4.forEach( (num) => {
  squared.push(num * num);

})

console.log(squared);

const numbers5 = [1,2,3,4,5,6,7,8];
const squaredFunc = (n) => n*n;

const sqd = numbers5.map(squaredFunc);
console.log(sqd);

const sqd1 = numbers5.map( n => n*n);
console.log(sqd1);

const items = [
  { 
    id: 1,
    text: 'hello'
  },

  {
    id: 2,
    text: 'bte'
  }
];

const texts = items.map( item => item.text);

console.log('texts: ', texts);

const superHerosIndex = superHeros.indexOf('토르');
console.log('superHerosIndex: ', superHerosIndex);

const todos = [
  {id: 1, text: 'javascript', done: true},
  {id: 2, text: 'CSS', done: true},
  {id: 3, text: 'HTML', done: true},
  {id: 4, text: 'React', done: false},
];

// how to find id 1?
const index = todos.findIndex((todo) => todo.id === 3);
console.log('id index: ', index);

const index1 = todos.find((todo) => todo.id === 3);
console.log('id index: ', index1);



// array inner function (filter) make new array if the condition is true.

const index2 = todos.filter( (todo) => todo.done === true);
console.log(index2);


// array inner function (splice, slice)
const numbers6 = [10, 20, 30, 40];
const index3 = numbers6.indexOf(30);
console.log('index of numbers6: ', index3);

numbers6.splice(index, 1); // does change original array
console.log( 'splice: ', numbers6);

// slice
const numbers7 = [10, 20, 30, 40];
const sliced = numbers7.slice(0, 1);
console.log(sliced);
console.log(numbers7); // doesn't change original array


// array inner function (shift, pop, unshift, push)
const value = numbers7.shift(); // first element is rejected from array.
numbers7.shift();
numbers7.shift();
numbers7.shift();
numbers7.shift();
numbers7.shift();
console.log( 'shift: ', value);
console.log(numbers7);

// pop
const numbers8 = [10, 20, 30, 40]; // last element is rejected from array.
const value1 = numbers8.pop();
numbers8.pop();
numbers8.pop();
numbers8.pop();
numbers8.pop();
console.log(value1);
console.log(numbers8);

// unshift
const numbers9 = [10, 20, 30, 40]; 
numbers9.unshift(50); // first element is added to array.
console.log(numbers9);

numbers9.push(60); // last element is added to array.
console.log(numbers9);

// concat
const arr1 = [1,2,3];
const arr2 = [4,5,6];

let concated = arr1.concat(arr2);
console.log(concated);

concated = [...arr1, ...arr2]; // spead operator
console.log('concated = [...arr1, ...arr2]: ', concated);

// join
console.log(concated.join());
console.log(concated.join(' '));


// array inner function (reduce)
const numbers10 = [10, 20, 30, 40, 50];
let sum = 0;

numbers10.forEach( number => sum += number);

console.log(sum);

const sum1 = numbers10.reduce((accumulator, current) => accumulator+current, 0);
console.log('reduce: ', sum1);

const sum2 = numbers10.reduce((accumulator, current, index, array) => {
  if(index === array.length - 1){
    return (accumulator, current) / array.length;
  }
  return accumulator + current;

}, 0);
console.log('reduce: ', sum2);

// prototype & class
// object construction
function Animal1(type, name, sound){
  this.type = type;
  this.name = name;
  this.sound = sound;
  
}

Animal1.prototype.say = function(){
  console.log(this.sound);
}

const dog2 = new Animal1('dog', 'puppa', 'bark');
console.log(dog2.type, dog2.name, dog2.sound);

const cat2 = new Animal1('cat', 'catwomen', 'meow');
console.log(cat2.type, cat2.name, cat2.sound);

dog2.say();
cat2.say();

// ES6 class

class Animal2 {
  constructor(type, name, sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

class DogClass extends Animal2{
  constructor(name, sound){
    super( 'dog', name, sound );
  }
}

class CatClass extends Animal2{
  constructor(name, sound) {
    super( 'cat', name, sound );
  }
}

const dog3 = new Animal2('dog', 'puppa', 'bark');
const cat3 = new Animal2('cat', 'catwomen', 'meow');

console.log(dog3.type);
dog3.say();
cat3.say();

const dog4 = new DogClass('dog4', 'barks');
const cat4 = new CatClass('cat4', 'meows');

dog4.say();
cat4.say();

class Food{
  constructor(name){
    this.name = name;
    this.brands = [];
  }
  addBrand(brand){
    this.brands.push(brand);
  }
  print(){
    console.log(`${this.name} deserve stores.`);
    console.log(this.brands.join(', '));
  }
}

const pizza = new Food('pizza');
pizza.addBrand('pizzahut');
pizza.addBrand('domino pizza');

const chicken = new Food('chicken');
chicken.addBrand('gubne chicken');
chicken.addBrand('BBQ');

pizza.print();
chicken.print();

// condition ? true : false

// truthy 참인듯 and falsy 거짓인듯
// undefined & null & 0 & '' & NaN <======== falsy value
// 이외 값은 truthy value

function print(person) {
  if( person === undefined || person === null) {
    return;
  }
  if(!person) {
    return;
  }

  console.log(person.name);
}

const person = {
  name: 'John'
};

print(person);

// Short-circuit evaluation

const dog5 = {
  name: 'dog3',
}

function getName(dog) {
  if(dog){
    return dog.name;
  }
  return undefined;
}

function getName1(dog){
  return dog && dog.name;
}

console.log( getName(dog5) );

console.log( getName1(dog5) );

console.log(true      && 'hello'); // 앞이 true면 계산은 뒤에 것을 한다.
console.log(false     && 'hello');// 앞이 false면 뒤에 것은 계산을 하지 않는다.
console.log('hello'   && 'bye');// 앞의 값이 truthy 한 값이기 떄문에 뒤에 값을 계산한다.
console.log(null      && 'hello'); // 앞의 값이 falsy 한 값이기 때문에 뒤에 것을 계산하지 않는다.
console.log(undefined && 'hello'); 
console.log(''        && 'hello');
console.log(0         && 'hello');

const namelessDog = {
  name: '',
};

function getName2(animal){
  const name = animal && animal.name;
  if(!name){
    return 'This animal is nameless.';
  }
  return name;
}

const dogName = getName2(namelessDog);
console.log(dogName);

console.log(false     || 'hello');
console.log(''        || 'nameless');
console.log(null      || 'This is null');
console.log(undefined || 'This is undefined');
console.log(0         || 'This is zero');

console.log(1         || 'what?');
console.log(true      || 'truethy');

// basic parameter of function
function calcCicleArea(r = 1) { // ES6 
  return Math.PI * r * r;
}

const area = calcCicleArea();
console.log( 'calcCircle Area: ', area);

// conditional 
function isAnimal(text) {
  return text === 'cat' || text === 'dog' || text === 'bird';
}

console.log(isAnimal('cat'));

function isAnimal_advenced(text){
  const animal = ['cat', 'dog', 'bird', 'tutle'];

  return animal.includes(text);
}

console.log(isAnimal_advenced('human'));

const isAnimal_arrow = text => ['cat', 'dog', 'bird', 'tutle'].includes(text);
console.log(isAnimal_arrow('human'));

function getSound(animal){
  const sounds = {
    cat: 'meow',
    dog: 'bark',
    bird: 'jjjaek',
    tutle: 'haul'
  }
  return sounds[animal] || 'We do not have other speice ';
}

console.log(getSound("cat"));

// 비구조화 할당 / 구조분해
const object_test = {a: 1, b: 2, c: 3};
const object_test2 = {d: 1, e: 2, f: 3};

// 객체 비구조화 할당
const {a, b, c} = object_test;
console.log(a);
console.log(b);
console.log(c);

function printObject ({ d, e, f, g=4 }){
  console.log(d);
  console.log(e); 
  console.log(f);
  console.log(g); 
}

printObject(object_test2);

const heros = {
  name: 'captain USA',
  age: 20
}

const { name: heroName } = heros;
console.log('heroName: ', heroName);


// 배열 비구조화 할당
const array2 = [1,2];
const [one, two, three=3] = array2;

console.log('one: ',one);
console.log('two: ', two);
console.log('three: ', three);

const deepObject = {
  state: {
    information: {
      name: 'jcdlove',
      languages: ['korean', 'english', 'chineses']
    }
  },
  value2: 5
};

const {
  state: {
    information: {
      name, languages
    }
  },
  value2
}  = deepObject;

const extracted = {
  name, languages, value2
};

console.log('extracted: ',extracted);

// spread & rest (ES6)
const slime = {
  name: 'slime'
}

const cuteSlime = {
  // name: 'slime',
  ...slime,
  attribute: 'cute',
}

const pulpleCuteSlime = {
  // name: 'slime',
  // attribute: 'cute',
  ...cuteSlime,
  color: 'pulple'
}

const greenCuteSlime = {
  ...pulpleCuteSlime,
  color: 'green',
}

console.log(slime);
console.log(cuteSlime);
console.log(pulpleCuteSlime);
console.log(greenCuteSlime);
// 이렇게 spread를 씀으로 해서 side effect를 방지할 수 있다.

const animals2 = ['dog', 'cat', 'bird'];
const anotherAnimals = [...animals2, 'bear'];
const anotherAnimals2 = animals2.concat('bear');

console.log(anotherAnimals);

console.log(anotherAnimals2);

// rest!! 
const {color, ...rest} = pulpleCuteSlime;

console.log( 'color: ', color);
console.log('rest', rest);

const numbers11 = [1,2,3,4,5,6];
const [one1, ...rest1] = numbers11;
console.log(one1);
console.log(rest1);

function sum3(a,b,c,d,e){
  return a+b+c+d+e;
}

console.log(sum3(1,2,3,4,5));

// function 
function sum4 ( ...rest2 ){
  return rest2.reduce((acc, current) => acc + current, 0);
}

const numbersArray = [1,2,3,4,5,6,7,8,8,7,7,8,8,8,7,7,3];

console.log(sum4(...numbersArray));

// scope in JavaScript
// Global (전역.. code 모든 범위에서 사용가능), 
// function(특정함수 내부에서만 사용가능하다), 
// Block (블록 내부에서만 사용가능하다.)

// Hoisting (function, variable)

myFunc();

function myFunc() {
  console.log('hello function');
}

console.log(value3);
var value3 = 3333;
console.log('------- Synchronous Asynchronous -----------------');
// Synchronous Asynchronous
function work(callback){
  setTimeout( () => {
    const start = Date.now();
    for(let i=0; i< 1000000000; i++){
  
    }
    const end = Date.now();
    console.log(end - start + 'ms');
    callback(end-start);
  }, 0); // 4ms is minimal timeout.
}

console.log('start work');
work(ms => {
  console.log('work end!!'); // callback 함수 등록!
  console.log(ms+' ms');
});
console.log('next work');

// Asynchronous : (Ajax Web API 요청, 파일읽기, 암호화/복호화, 작업예약)

// promise (ES6)
function increaseAndPrint(n, callback){
  setTimeout(()=> {
    const increated = n + 1;
    console.log(increated);

    if(callback){
      callback(increated);
    }
  }, 1000);
}

// increaseAndPrint(0, n => {
//   increaseAndPrint(n, n=> {
//     increaseAndPrint(n, n=> {
//       increaseAndPrint(n, n=> {
//         increaseAndPrint(n, n=> {
//           console.log('work finished!!');
//         })
//       })
//     })
//   })
// })

const myPromise = new Promise((resolve, reject) => {
  // Promise can do failure or success.
  // success : resolve called
  // failure : reject called
  
  setTimeout( () => {
    // resolve('result'); // success
    reject(new Error());  // failure
  }, 1000)
}, 1000);

/*
myPromise.then( result => {
  console.log(result);
}).catch( e => {
  console.error(e);
})

*/

function increaseAndPrint_Promise(n){
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      let value = n + 1;
      if(value === 5){
        const error = new Error(); 
        error.name = 'ValueIsFiveError';
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000 );
  });
}


/*
increaseAndPrint_Promise(0).then( n =>{ 
  return increaseAndPrint_Promise(n);

}).then( n => {
  return increaseAndPrint_Promise(n);
}).then( n => {
  return increaseAndPrint_Promise(n);
}).then( n => {
  return increaseAndPrint_Promise(n);
}).then( n => {
  return increaseAndPrint_Promise(n);
}).then( n => {
  return increaseAndPrint_Promise(n);
}).catch( e=> {
  console.error(e);
})

*/

// async await

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms)); // ms 이후에 끝나는 Promise 생성
  
}

const getDog = async () => {
  await sleep(1000);
  return 'Dog!!';
}

const getRabbit = async () => {
  await sleep(500);
  return 'Rabbit!!';
}

const getCat = async ()=> {
  await sleep(3000);
  return 'meow!!';
}

// async function process() {
//   console.log('hello async function');
//   await sleep(1000);
//   console.log('Nice to meet you async function');
// }

async function process() {
  const dogAwait = await getDog();
  console.log(dogAwait);

  const catAwait = await getCat();
  console.log(catAwait);

  const rabbitAwait = await getRabbit();
  console.log(rabbitAwait);
}

process();

async function process_all() {
  const results = await Promise.all([getDog(), getCat(), getRabbit()]);
  console.log('process_all: ',results);


}

process_all();




async function process_race() {
  const results = await Promise.race([getDog(), getCat(), getRabbit()]);
  console.log('process_race: ', results); // 제일 빨리 끝나는 Promise를 반환한다.

  
}

process_race();

// HTML and JavaScript 연동

const number_final = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

console.log(number_final);
console.log(increase);
console.log(decrease);

increase.onclick = () => {
  // console.log('clicked increase button');
  const current = parseInt(number_final.innerText, 10);
  number_final.innerText = current + 1;
}

decrease.onclick = () => {
  // console.log('clicked decrease button');
  const current = parseInt(number_final.innerText, 10);
  number_final.innerText = current - 1;
}
