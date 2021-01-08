// 베얄 디루기

var arr=[];
var arr2=[1,2,3,4,5];

console.log(arr2[1]);

var mixed_arr = [ 
    1, true, 3.14, "string", {name:"object"}, [1,2,3] 
];

console.log(mixed_arr);
console.log(mixed_arr.length);

console.log(mixed_arr[1]);

console.log(arr2.pop()); // 배열의 뒤를 빼준다.
console.log(arr2);

console.log(arr2.shift()); // 배열의 앞를 빼준다.
console.log(arr2);

console.log(arr2.push(3)); // 배열의 뒤를 더해준다.
console.log(arr2);

console.log(arr2.unshift(3)); // 배열의 앞를 더해준다.
console.log(arr2);

console.log(arr2.reverse());

var str = "1,2,3,4,5";
str.split(","); // 구분자

console.log(str);
console.log(str[0]);