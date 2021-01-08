// if 조건문
if(true){
    console.log("이 구문을 실행하세요.");
}

if(false){
    console.log("이 구문을 실행하지마세요.");
}

if(true){
    console.log("if 절입니다.");
}
else{
    console.log("else절 입니다.");
}

if(false){
    console.log("if 문입니다.");
}
else if(true){
    console.log("else if 문입니다.");
}
else{
    console.log("else 문입니다.");
}

console.log("1번 메뉴는 아메리카노");
console.log("2번 메뉴는 아메리카노");
console.log("3번 메뉴는 아메리카노");
console.log("4번 메뉴는 아메리카노");

var menu = parseInt(prompt("메뉴를 선택하세요."));
switch(menu){
    case 1:
        console.log("아이스아메리카노 입니다.");
        break;
    case 2:
        console.log("아이스아메리카노 입니다.");
        break;
    case 3:
        console.log("아이스아메리카노 입니다.");
        break;   
    case 4:
        console.log("아이스아메리카노 입니다.");
        break;   
    default:
        console.log("그런 메뉴는 없습니다.");
        break;
}