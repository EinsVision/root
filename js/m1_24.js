// JSON (Javascript Object Notation)
// 자바스크립트의 객체를 문자열로 표현하는 방법

// JSON API
// JSON.stringify( object )
// 인자로 받은 객체를 JSON 문자열로 반환함
// JSON.parse( sring )
// 인자로 받은 문자열을 Javascript Object로 변경해 반환함

var pi = 3.14;
var str = "string";

console.log(JSON.stringify(pi));
console.log(JSON.stringify(str));

console.log(JSON.parse("3.14"));
console.log(JSON.parse("\"string\""));