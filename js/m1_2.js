//var word = '나무다';
// var word=prompt("이름을 입력해 주세요.");
// alert(word);
// console.log(word);

var a= 100, b=3.14;
var c="안녕하세요.", d="a";
var e=true, f=false;

console.log(a, typeof(a));
console.log(c, typeof(c));
console.log(e, typeof(e));

var height = prompt("키를 입력하세요.");
console.log(height, typeof(height));

var height_int;
height_int = parseInt(height);
console.log(height_int, typeof(height_int));

var height_float;
height_float = parseFloat(height);
console.log(height_float, typeof(height_float));

var man={name: "홍길동", age: 20, height: 180};
console.log(man.age);

// undefined null (= 값이 없다.)
var undefi; // undefined 

// null은 개발자가 일부러 없는 값을 설정할 때 쓴다.
var value_null = null;