var x = '전역변수 x';
function outer(x){
    var y = "outer 지역변수 y";
    console.log(x);// outer x
    console.log(y);// outer y
    //console.log(z);// 조회 불가

    function inner(){
        var z = "inner 지역변수 z";
        console.log(x);// outer x
        console.log(y);// outer y
        console.log(z);// inner z
    }
    inner();
}
outer('outer 지역변수 x');
console.log(x)// 전역변수 x
//console.log(y);// 조회불가
//console.log(z);// 조회불가