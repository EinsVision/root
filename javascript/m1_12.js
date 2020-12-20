// 변수의 scope

function a(){
    var v_a ="a";

    function b(){
        var v_b = "b";
        console.log("b: ", typeof(v), typeof(v_a), typeof(v_b));
    }
    b();
    console.log("a: ", typeof(v), typeof(v_a), typeof(v_b));
}

var v = "v";

a();
console.log("o: ", typeof(v), typeof(v_a), typeof(v_b));

// b:  string string string
// a:  string string undefined
// o:  string undefined undefined


// shadowing 
function shadowing_exam(){
    var val=0;  // 이것에 따라 val 값이 달라질 수 있다.
    console.log("F: ", val);
    val++;
}

var val = 0;
shadowing_exam();
console.log("O: ", val);