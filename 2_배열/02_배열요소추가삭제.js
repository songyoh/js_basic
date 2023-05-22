var pets = ['멍멍이','야옹이','룰루'];

console.log(`pets:${pets}`);

// pets[3] = '어완자'; 배열길이를 고려하지 않음
pets.push('어완자');
pets.push('땡칠이');
console.log(`pets:${pets}`);

var newLength = pets.push('콩콩이','징징이');
console.log(`pets:${pets}, 2개 넣으면? : ${newLength}`);

// 마지막 데이터 삭제
var deletedData = pets.pop();//삭제와 동시에 삭제한 데이터 리턴됨

console.log(`pets:${pets}, 삭제된 데이터:${deletedData}`);

// shift로 첫 번째 데이터 삭제
deletedData = pets.shift();
console.log(`pets:${pets}, 삭제된 데이터:${deletedData}`);

// unshift로 배열 첫 번째에 데이터 추가하기
newLength = pets.unshift('먼지','봉지');
console.log(`pets:${pets}, 추가 후 길이:${newLength}`);