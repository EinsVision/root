function f(){
    console.log(this); // 어떤 객체에 바인딩된 속성인지 알게 해준다. 전역 객체에 속한다.
    // 일반적인 함수를 호출할 때, 해당 함수 내부에서 사용된 this는 전역객체(브라우저의 경우 window 객체)에 바인딩 된다.
    console.log("f is called");
}

var obj={
    name: "object",
    method: f,
}

f(); //window 객체가 호출
obj.method(); //obj 객체가 호출