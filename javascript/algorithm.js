var 바디 = document.body;
var 단어 = document.createElement('div');
단어.textContent = '초밥';
document.body.append(단어);

var 입력창 = document.createElement('input');
document.body.append(입력창);

var 버튼 = document.createElement('button');
버튼.textContent = '입력!';
document.body.append(버튼);

var 결과창 = document.createElement('div');
document.body.append(결과창);

버튼.addEventListener('click', function 콜백함수 (){
    if(단어.textContent[단어.textContent.length - 1] === 입력창.value[0]){
        결과창.textContent = '딩동댕';
        단어.textContent = 입력창.value;
        입력창.value='';
    } else{
        결과창.textContent = '땡';
    }
});
// 구구단을 컴퓨터로 부터 입력 받아 맞추는 기능
// while(true){

// 	var num1 = Math.floor(Math.random() * 9) + 1;
// 	var num2 = Math.floor(Math.random() * 9) + 1;

// 	var result = num1 * num2;

// 	var input = prompt("곱셈문제: " + num1 + "*" + num2);
// 	input = Number(input);
//     if(result === input)
//     {
//         alert("맞습니다." + result + " " +input);
//     }
//     else
//     {
//         alert("틀렸습니다." + result + " " +input);
      
// 	}
// }