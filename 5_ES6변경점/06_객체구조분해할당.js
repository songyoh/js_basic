const emp = {
    empName : '김자스',
    age : 29,
    hireDate : '2014-01-01',
    birthDay : '1995-12-31',
};

// 기존 문법
/*const empName = emp.empName;// 직접 객체명을 .으로 찍어서 가져오기
const age = emp.age;
const age = emp['age'];// 인덱싱 방식으로 얻어오기 가능
console.log(`사원명:${empName},나이:${age}`);*/

// 객체구조분해할당으로 가져오기 {}중괄호로 해야함<-> 배열일때는 []대괄호
/*const {age, birthDay, empName} = emp;
console.log(`사원명:${empName},나이:${age},생일:${birthDay}`);*/

// 구조분해할당 + 변수명 바꿔서 가져오기
const{age:a, birthDay:b,empName:e} = emp;
console.log(`사원명:${e},나이:${a},생일:${b}`);