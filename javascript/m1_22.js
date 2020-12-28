// AJAX (Asyncronous Javascript and XML)
// 브라우저에서 페이지를 이동하지 않고 자바스크립트를 통해 
// HTTP Request를 보내고 그 응답을 받아 처리할 수 있는 기술

// 페이지를 이동하지 않고 서버에서 새로운 정보를 받아 오거나 
// 브라우저의 정보를 서버로 전송할 수 있을 때문에 사용자에게
// 더 나은 사용 경험을 제공할 수 있다.

var req = new XMLHttpRequest(); // 서버와 통신하기 위해 XMLHttpRequest 객체를 사용하는 것
req.open("GET", "../data.txt");
req.send(); // http request가 전송되도록 할 수 있다.
console.log(req.response); // 비동기이기 때문에 출력안된다.