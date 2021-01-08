// 예외처리
// try, catch, finally

function errFun(){
    throw "error";
    console.log("this code won't work!");
}

try{
    console.log("try ~~ 1");
    // throw "error";
    errFun();
    console.log("try ~~ 2");
}
catch(e){
    console.log("catch error: ", e);
}
finally{
    console.log("finally ~ this code will be fine");
}