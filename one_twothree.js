//배열에 새로운 값을 추가할 때는 push() 함수 대신 concat() 함수를 사용
//삭제할 때는 pop(), shift() 함수 대신 slice(), concat() 함수에 전개 연산자를 조합하여 사용
//이렇게 하면 새값을 할당하는 것이 아닌 기존의 값을 이용하여 새 불변 변수에 할당하는 것이 됨
//이는 무결성 내장 함수로 객체나 배열을 직접 수정하는 것이 아니라 새 결과를 반환하는(무결성 제약 조건을 지키는) 함수임
//불변 변수를 사용하면 무결성 제약 규칙에 의해 변수가 변하는 시점을 쉽게 파악할 수 있음
//또한, 수정 전과 후의 변수값을 비교할 수 있어 가변 변수보다 유용함

const num1 = 1;
const num2 = num1 * 3; //num2 = 3 
const str1 = '문자';
const str2 = str1 + '추가'; //str2 = "문자추가"
const arr3 = [];
const arr4 = arr3.concat(1); //arr4 = [1]
const arr5 = [...arr4, 2, 3]; //arr5 = [1, 2, 3]
const arr6 = arr5.slice(0, 1); //arr6 = [1], arr5 = [1, 2, 3]
const [first, ...arr7] = arr5; //arr7 = [2, 3], first = 1
const obj3 = { name: '내이름', age: 20 };
const objValue = { name: '새이름', age: obj3.age };
const obj4 = { ...obj3, name: '새이름' }; //obj4 = { name: '새이름', age: 20 }
const { name, ...obj5 } = obj4; //obj5 = { age: 20 }
