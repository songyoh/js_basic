const TODAY_SALE_RATE = 0.2;
const PI = 3.14159265;

const kim = {
    name : '김철수',
    age : 25,
};

/*kim = { // const는 번지수를 변경 못하도록 하는것 힙영역 변경은 보장불가
    name = '새철수',
    age = 30,
};*/

kim.name = '김칠수';// 참조 내용물만 바뀌었고 번지수는 안바꼈음

console.log(kim);