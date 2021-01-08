// 엘리먼트 추가 삭제

// 마지막 위치에 tag 추가하기
hr = document.createElement("hr"); // tag 생성
document.body.appendChild(hr); // 실제 문서에 적용한다.

// 원하는 위치에 tag 추가하기
document.body.insertBefore(hr, document.body.children[3]);

hr2 = hr.cloneNode();
document.body.insertBefore(hr2, document.body.children[6]);

// 제거할 수도 있다.
document.body.removeChild(hr2);