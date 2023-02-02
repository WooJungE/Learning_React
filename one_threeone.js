//객체 확장 표현식과 구조 분해 할당
//객체나 배열의 특정값을 손쉽게 추출할 수 있는 표현식 추가

//기존 자바스크립트의 객체 확장 표현식 사용 방법
//객체와 객체의 값을 선언하기 위해 키 이름과 값을 각각 할당

var x = 0;
var y = 0;
var obj = { x: x, y: y};
var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value';
var obj2 = {
  X: X,
  methodA: function() { console.log('method A'); },
  methodB: function() { return 0; },
};
