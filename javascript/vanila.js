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