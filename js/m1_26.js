// 익명함수 호출 (1회성 호출)
// 함수 정의와 함께 호출할 수 있는 함수가 있다. 

function eventHandler_ex(){
    console.log("eventHandler");
    function innerFunction(){
        console.log("InnerFunction");
    }
    for(var i=0; i<2; i++){
        innerFunction();
    }
}

// 익명함수 정의!
(function (){
    for(var i=0; i<5; i++){
        console.log(i);
    }
})();

