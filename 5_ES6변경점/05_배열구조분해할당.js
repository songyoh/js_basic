const userNames = ['김철수','강감찬','박영희'];

// 구조분해할당에 의한 분할저장
const [kim, kang, park] = userNames;

console.log(`kim:${kim}, kang:${kang}, park${park}`);

// 변수 값 교환하기
let first = 10;
let second = 20;

console.log(`교환 전: first:${first}, second:${second}`);
[first,second] = [second,first];
console.log(`교환 후: first:${first}, second:${second}`);

// 앞 2개는 변수에 각각 넣고, 나머지는 배열로 빼기
const numbers = [1,3,5,7,9,11];
const[one, three, ...others] = numbers;

console.log(`one:${one},three:${three}, 나머지:${others}`);

// 스프레드를 이용한 배열 확장
console.log("-----------------------");
const foods = ['돈까스','감자탕','내장탕','보쌈'];

// 배열 복사가 다음과 같이 됨
// [['돈까스','감자탕','내장탕','보쌈'],'초밥','햄버거']
const newFoods = [foods, '초밥','햄버거'];
console.log(`추가 확인:${newFoods}`);
//console.log(`추가 확인:${newfoods[0]}`);//추가 확인:돈까스,감자탕,내장탕,보쌈 으로 실행됨
//console.log(`추가 확인:${newfoods.length}`);//추가 확인:3개로 실행됨
// 일반 확장을 하려고 하는 경우, 1.이중배열처리가 되고, 2.얕은복사가 일어나는 문제가 있다.
foods[0] = '크로켓';
console.log(`foods :${foods}, newfoods:${newFoods}`);

// 깊은복사를 이용해 배열 확장 및 깊은복사 처리가 가능합니다.
const advFoods = [...foods,'초밥','햄버거'];
console.log(`advFoods의 이중배열 여부:${advFoods[0]}`);
console.log(`advFoods의 이중배열 여부:${advFoods.length}`);

foods[1] = '치킨마요덮밥';
// 스프레드 문법이 적용된 복사는 깊은 복사입니다.
console.log(`foods:${foods},advfoods:${advFoods}`);