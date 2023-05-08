function calculator(n1,n2){

    function add(){
        return n1+n2;
    }
    return add;// calculator의 add라는 함수를 정의만한 상황. 호출시 [Function: add]라는 값만 나옴
    //return add();
}
const closure = calculator(5,6);
console.log(closure);// add함수의 호출을 리턴
console.log(typeof closure);

const n = closure();
console.log(`closure의 결과: ${n}`);

//즉시 실행 함수
//함수를 선언하고, 선언부뒤에 ()();를 추가로 붙이면 그 함수는
//선언과 동시에 실행까지 됩니다.
//일회성으로 호출할 함수를 만들때 많이 사용합니다.
const start = (() => {
    console.log("즉시실행 구문");
})();

//리턴자료가 없었기 때문에, start 변수에 저장받은 자료가 없음
//start();

(() => {
    console.log("즉시실행 구문");
})();