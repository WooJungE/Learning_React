//객체 확장 표현식과 구조 분해 할당
//객체나 배열의 특정값을 손쉽게 추출할 수 있는 표현식 추가

//기존 자바스크립트의 객체 확장 표현식 사용 방법
//객체와 객체의 값을 선언하기 위해 키 이름과 값을 각각 할당

var x = 0;
var y = 0;
var obj = { x: x, y: y}; //obj에 대입한 객체를 보면 키 이름이 키값과 동일(각각 x, y)함
var randomKeyString = 'other';
var combined = {};
combined['one' + randomKeyString] = 'some value'; //연산 결과로 키값을 대입할 때는 키값을 지정할 코드를 추가로 작성해야 함
var obj2 = { //객체에 함수를 추가할 때는 변수에 함수를 할당해야 함
  X: X,
  methodA: function() { console.log('method A'); },
  methodB: function() { return 0; },
};
