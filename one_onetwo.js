//ES6 문자열 사용 방법

var string1= '안녕하세요';
var string2= '반갑습니다';
var greeting = `${string1} ${string2}`;
var product = { name: '도서', price: '11000원'};
var message =`제품 ${product.name}의 가격은 ${product.price}입니다`;
var multiLine = `문자열1
문자열2`;
var value1 = 1;
var value2 = 2;
var boolValue = false;
var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
var operator2 = `${boolValue ? '참' : '거짓'}입니다.`;
//작은 따옴표 대신에 백틱(`)으로 문자열을 포함
