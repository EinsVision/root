// 평균 구하기 문제
function solution(arr) {
    var answer = 0;
    var total=arr.length;
    for(var i=0; i < arr.length; i++){
        answer += arr[i];
    }
    console.log(total);
    answer = answer /total;
    return answer;
};
var arr2=[5,5];
console.log(solution(arr2));