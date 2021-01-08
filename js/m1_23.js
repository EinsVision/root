// event handle 등록해서 사용하는 방법 알아 보기!

var req = new XMLHttpRequest(); // 서버와 통신하기 위해 XMLHttpRequest 객체를 사용하는 것
req.open("GET", "../data.txt");

req.onreadystatechange = function a(){
    console.log(this.readyState, this.status);
    if(this.readyState == 4 && this.status == 200)
    {
        console.log(this.response);
    }
}
req.send();
// req.response;