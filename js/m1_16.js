// web client side javascript programming은 
// javascript language로 logic을 작성하고 browser에서 제공하는
// window API를 이용해 HTML / CSS를 조작하는 것이 된다.

// Document Object Model
// 컴퓨터가 문서를 잘 처리할 수 있도록 문서에 대한 구조를 약속한 것

// 원하는 element에 접근하기 !!
// 1. firstElementChild
// 2. lastElementChild
// 3. nextElementSibling
// 4. previousElementSibling

// 표시된 웹 페이지의 정보에 접근하거나 변경을 할 수 있음
// window.location : 현재 브라우저 창의 주소를 나타내는 객체
// window.location.href : 브라우저 창에 입력된 주소, 변경 가능
// window.navigator : 브라우저 자체에 대한 정보
// window.screen : 디스플레이의 사이즈
// window.document : 웹 페이지 문서의 HTML, CSS 등에 대한 접근 가능

var t = document.getElementById("lyricist");
console.log(t.innerHTML);
console.log(t.innerText);
