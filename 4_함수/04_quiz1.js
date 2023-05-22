/*
Q. n의 약수의 개수를 구하기
1. 정수 n을 전달받아 n의 약수들을 출력하고
    약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
*/
function calcDivisor(targetNumber){
    // 약수들을 저장할 배열
    var divisor = [];
    for(var i = 1; i <= targetNumber; i++){
        if(targetNumber % i === 0){
            divisor.push(i);
        }
    }
    console.log(`${targetNumber}의 약수: ${divisor}`);
    return divisor.length;
}

calcDivisor(10350);

function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    return count;
}

console.log(countDivisors(20));