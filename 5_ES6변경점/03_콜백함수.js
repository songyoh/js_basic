// 정수 n을 전달하면 1부터 n까지의 모든 짝수를 출력하는 함수
function showEvenNumber(n){
    for(let i=1; i<=n; i++){
        if(i % 2 === 0) console.log(i);
    } 
}

// 정수 n을 전달하면 1부터 n까지의 모든 홀수를 출력하는 함수
function showOddNumber(n){
    for(let i=1; i<=n; i++){
        if(i % 2 === 1) console.log(i);
    } 
}

//showEvenNumber(10); 짝수
//showOddNumber(10); 홀수

//1차 개선(짝수 홀수 여부까지 지정 가능)
function showOddOrEvenNumber(n, delimeter){
    for(let i=1; i<=n; i++){
        if(i % 2 === delimeter) console.log(i);
    } 
}

//showOddOrEvenNumber(10, 0); 짝수
showOddOrEvenNumber(10, 1);//홀수

console.log("-----------------")

//1부터 n까지 m의 배수 숫자만 출력하게 세팅해보자.
function showMultipleNumber(n,m){
    for(let i=1; i<=n; i++){
        if(i % m === 0) console.log(i);
    }
}

//showMultipleNumber(100,5);//1~100까지, 5의 배수만 구하는 코드

// 콜백 형식으로 전환
function showNumber(n, code){
    for(let i=1; i<=n; i++){
        if(code(i)){
            console.log(i);
        }
    }
}
const callback = n => n%3 === 0;// 어떤 특정값을 3으로 나눠 0이 나오는지 체크. 0이 나오면 true
//const callback = function(n){return n%3 === 0};
//console.log(callback());
showNumber(20,callback);
