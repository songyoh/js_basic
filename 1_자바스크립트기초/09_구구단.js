//2단부터 9단까지 출력하는 구구단 로직을
//중첩 반복문을 이용해서 만들어보기
// 출력양식 `a * b = (a * b)`
for(var i=2; i<=9; i++){
    console.log(`${i}단`)
    for(var j=1; j<=9; j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}