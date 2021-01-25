// fast campus lectures
// 함수도 객체의 한 종류이다.

function hello1(){
    console.log('hello1');
}

hello1();

console.log(hello1, typeof hello1);

function hello2(name){
    console.log(name + 'hello2');
}

hello2('changdae');

function hello3(name){

    return `hello3 + ${name}`;
}

const func = hello3('jcdlove in hello3');
console.log(func);

// 함수를 선언하는 방법 2 (익명 함수)
const hello4 = function(name){
    console.log('hello4 function 이름없는 함수 ' + name);
};

console.log(hello4);
hello4();

hello4('hello4');

// 선언적 함수와 익명함수의 차이점
// 여기서 function은 먼저 메모리에 할당해서 뒤에 선언되더라도 문제가 없다.

const sumFunc = new Function('a', 'b', 'c', 'return a + b + c');
console.log(sumFunc(1,2,3));

var a = 0;

{
    const a = 1;
    const func = new Function('return a');
    console.log(func());
}

// arrow 형태는 항상 익명함수의 형태이다.
const hello5 = () => {
    console.log('arrow function 1');
}

hello5();

const hello6 = name => {
    console.log('arrow function 2 : ', name);
}

hello6('hello arrow');

const hello7 = (name, age) => {
    console.log('arrow function 3 : ', name, ' ', age);
}

hello7('changdae', 4);

const hello8 = name => 
    `arrow function 4: ${name}`;

console.log(hello8('hello'));

function Person(name, age){
    this.name = name; // this는 객체를 만들었을 때 객체를 가리키는 용도로 사용된다.
    this.age = age;
}

const p = new Person('jung', 30);

console.log(p, p.name, p.age);

function cb(c){
    console.log('hello callback');
    c();
}

cb(function(){
    console.log('콜백');
})

const obj = {
    title: 'node.js all-in one package'
}

const isEmpty = (object) => {
    if(object.title){
        console.log('object.title is.');
        return true;
    }
    else{
        console.log('object title is none.');
        return false;
    }

}


console.log(isEmpty(obj));