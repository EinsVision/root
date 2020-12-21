// callback function
// 조건을 등록해두고 그 조건을 만족한 경우, 나중에 호출해 주는 함수
function callback(){
    console.log("callback function is called");
}

// 2초 후에 callback 함수 실행
setTimeout( callback, 2000);

// 5초 마다 callback 함수 실행
setInterval(callback, 5000);

clearInterval(2);
