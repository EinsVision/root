// event 종류에는 
// form event, window event, mouse event, key event 가 있다.

// event handler 등록하기
var t = document.getElementById("form1");
t.onsubmit = function a(){
    console.log("from property");
    return false;
}

function b(){
    console.log("from addEventLIstener");
    return false;
}

function c(){
    console.log("from addEventLIstener #2");
    return false;
}

t.addEventListener('submit',b);
t.addEventListener('submit',c);

t.removeEventListener