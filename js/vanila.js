const test = 1;
let result = 221;
result = result - test;
// test = 2; 에러를 발생시킴
console.log(result);

// vanila javascript data type
const what = "Jungchangdae"; // string
const bin = true;            // boolean
const num = 77;              // number
const floa = 0.1;            // float 

// Array
const daysOfWeek = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);
console.log(daysOfWeek[5332]); // undefined

// Object
// label을 만들고 data를 넣어준다.
const People={
    name:'Peter',
    age: 33,
    gender:'Male',
    isHandsome:true,
    favMovies: ['ts','tech'],
    favFood:[
        {
            name: 'pizza', 
            fatty: true
        },
        {
            name: 'Cheese burger', 
            fatty: true
        },
    ]
}

console.log(People);
console.log(People.gender);

People.gender = 'Female';

console.log(People);
console.log(People.gender);
console.log(People.favFood[0].fatty);

// console 은 Object이다. 이것은 내장함수 (build-in function)이다.
function sayHello(){
    console.log('Hello');
}

sayHello();

function sayHelloFriend(name){
    console.log('Hello'+' '+name);
}

sayHelloFriend('Janny');

// more function fun
function sayHelloFriend2(name, age){
    console.log(`Hello ${name} you are ${age}.`); //배틱
}

sayHelloFriend2('Jonas', 19);

function sayHelloFriend3(name, age){
    return `Hello ${name}, you are ${age}. Hello again!`;
}

const greeting = sayHelloFriend3('Peter',30);
console.log(greeting);

const calculator={
    plus: function(num1, num2){
        return num1+num2;
    },
    minus: function(num1, num2){
        return num1-num2;
    },
    mul: function(num1, num2){
        return num1*num2;
    }
}

console.log(calculator.plus(5,5));
console.log(calculator.minus(5,5));
console.log(calculator.mul(5,5));

// JS DOM(Document Object Model) functions
const title = document.getElementById('title');

console.log(title);

title.innerHTML = 'Hi from JS';

// HTML을 DOM 객체로 바꿀 수 있다는 것을 확인했다.
// Modifying the DOM with JS

console.dir(title);
title.style.color = 'red';

const select = document.querySelector('#title');
console.log(select);
select.style.color= 'black';

// event and event handler
function handlerResize(){
    console.log('I have been resized.');
    title.style.color = 'lightpink';
}

const BASE_COLOR = 'black';
const OTHER_COLOR = '#ff6347';

function handlerClick(){
    console.log('I have been clicked.' + title.style.color);
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        console.log('color is black');
        title.style.color = OTHER_COLOR;
    } else{
        console.log('else color');
        title.style.color = BASE_COLOR;
    }
}

function handlerKeydown(){
    console.log('I have been keydowned.');
    title.style.color = 'darkmagenta';
}

window.addEventListener('resize', handlerResize);
window.addEventListener('click', handlerClick);
window.addEventListener('keydown', handlerKeydown);

/*  
window.addEventListener('resize', handlerResize());
 만일, 위와 같이 handerResize()라고 선언하면 함수를 바로
 실행하는 것이 된다. 우리는 resize 될 때, 함수를 호출하고 싶다.
*/

if(20>5 && 'test' === 'test'){
    console.log('yes');
} else{
    console.log('no');
}

if(20<5 || 'test' === 'test'){
    console.log('yes');
} else{
    console.log('no');
}

const namedClass = document.querySelector('.para');
const CLICKED_CLASS = 'clicked';
const ORI_CLASS = 'para';

function handlerClickClass(){
    const currentClass = namedClass.className;
    console.log('hello world');
    // namedClass.style.color = 'blue';
    if(currentClass !== CLICKED_CLASS){
        namedClass.className = CLICKED_CLASS;
        namedClass.style.color = 'blue';
    } else{
        namedClass.className = ORI_CLASS;
        namedClass.style.color = 'green';
    }
}

function init(){
    window.addEventListener('mouseup', handlerClickClass);
}

init();