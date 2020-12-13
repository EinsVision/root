// 구구단을 컴퓨터로 부터 입력 받아 맞추는 기능
while(true){

	var num1 = Math.floor(Math.random() * 9) + 1;
	var num2 = Math.floor(Math.random() * 9) + 1;

	var result = num1 * num2;

	var input = prompt("곱셈문제: " + num1 + "*" + num2);
	input = Number(input);
	if(result === input)
		console.log("맞습니다." + result + " " +input);
	else
		console.log("틀렸습니다." + result + " " +input);
	
}