// javascript immutability

// var v = 1;

// v = 2;

// const vc = 1;
// vc = 2;


// console.log(v);

var p1 = 1;
var p2 = 1;               // constant value isn't able to change (immutability)

console.log(p1 === p2);

var o1 = { name: 'kim' }; // obeject value is able to change.
var o2 = { name: 'kim' };

console.log(o1 === o2);

var o3 = o1;

console.log( o3.name, o1.name, o3 === o1 );

o3.name = 'lee'; // o1.name is changed also.

console.log( o1.name, o1.name, o3 === o1 );



var o4 = {name: 'kim'};
var o5 = Object.assign({}, o4);

o5.name = 'lee'

console.log( o4, o5, o4 === o5 );


// push() vs concat()

var o6 = {name: 'jung', score: [1,2] };

console.log(o6);

var o7 = Object.assign({}, o6);
o7.name = 'lee';
// o7.score.push(3); // original data is changed
o7.score.concat(); // copy to o7 score.
o7.score.push(4);
console.log(o6, o7, o6 === o7);

var score =[1,2,3];
// score.push(4);
var score2 = score.concat(4);
console.log(score2);
console.log(score);

// Object.freeze 

var o8 = {name: 'kim', score:[1,2]};
Object.freeze(o8);
Object.freeze(o1.score);
o8.name = 'lee'; // value freezed... do not change
console.log(o8);

o8.score.push(3);
console.log(o8);

// const vs Object.freeze 
const o9 = { name: 'kim' };
Object.freeze(o9);
const o10 = {name:'lee'};

// o9 = o10; error bcz of const

o9.name = 'park';
console.log(o9); // don't be changed bcz of freeze

const des = 10;
des = 11;