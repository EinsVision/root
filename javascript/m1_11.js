// for loop
// for in 구문

var array=[1,2,3,4,5,56,6,7,8,9,10];

var i=0;

while(i<array.length){
    console.log(array[i]);
    i++;
}

for(i=0;i<array.length;i++){
    console.log(array[i]);
}

var obj={
    name: "einsvision",
    wieght: 30,
    isObject:true,
    arr:[1,2,3],
    obj:{property:1},
};

var property_list = Object.keys(obj);
console.log("Property List: ", property_list);

for(var i=0; i<property_list.length; i++){
    var propertyName = property_list[i];
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

console.log("for in loop로 반복하기");

for(var propertyName in obj){
    console.log("\t", propertyName, ": ", obj[propertyName]);
}

console.log("name" in obj);