console.log("1번 메뉴는 아메리카노");
console.log("2번 메뉴는 아메리카노");
console.log("3번 메뉴는 아메리카노");
console.log("4번 메뉴는 아메리카노");

var count = 0;
while(count<3){
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
    count++;
}
