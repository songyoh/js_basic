var x = 30;
var y = 40;

var z = ''+ x+ y;
var z2 = String(x)+y.toString();
console.log(`z의 타입:${typeof z}, z2의 타입:${typeof z2}`);

var num = Number(`hello`);
console.log(`숫자로 바꿀 수 없는 문자를 숫자로:${num}`);

