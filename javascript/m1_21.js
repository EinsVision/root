// event 종류에는 
// form event, window event, mouse event, key event 가 있다.

var t = document.getElementById("form1");
t.onsubmit = function a(){
    console.log("from property");
    return false;
}

