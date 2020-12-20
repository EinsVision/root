// 문자열의 길이 알아내기, 문자열 붙이기
var str ="Hello";

console.log(str.length);
console.log(str["length"]);

var str2 = "world";
console.log(str.concat(str2));

console.log("hello".concat(" world").concat("!"));


console.log(str + str2);

// charAt

console.log(str.charAt(0));
console.log(str.charAt(-1));

console.log(str2[1]);

console.log(str.substring(1,3));

console.log(str.substr(2,3));

console.log(str.indexOf("e"));
console.log(str.lastIndexOf("l"));