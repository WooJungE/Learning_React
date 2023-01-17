//ES6의 불변 변수 사용 방법
//const: 값을 수정할 수 없는 불변 변수를 위한 키워드
//const로 선언한 변수는 읽기만 가능
//불변 변수는 값을 다시 할당할 수 없는 것이지 값을 변경할 수는 있음

//const로 선언한 변수에 값을 다시 할당하여 오류가 발생한 코드
/*
const num = 1;
num = 3; //자료형 오류가 발생
const str = '문자';
str = '새 문자'; //자료형 오류가 발생
const arr = [];
arr = [1, 2, 3]; //자료형 오류가 발생
const obj = {};
obj ={ name: '내 이름' }; //자료형 오류가 발생
*/

//배열이나 객체를 불변 변수로 선언(arr2, obj2)하고 자바스크립트 내장 함수(push, splice, ...)로 값을 변경
const arr2 = [];
arr2.push(1); //arr2 = [1]
arr2.splice(0, 0, 0); //arr2 = [0, 1]
arr2.pop(); //arr2 = [1]
const obj2 = {};
obj2['name'] = '내이름'; //obj2 = { name: '내이름' }
Object.assign(obj2, { name: '새이름' }); //obj = { name: '새이름' }
delete obj2.name; // obj2 = {}