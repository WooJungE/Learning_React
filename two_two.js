//기존 자바스크립트의 구조 분해 사용 방법 (객체나 배열의 특정 자료)

var list = [0, 1];
var item1 = list[0]; //배열의 인덱스를 사용하여 변수에 할당
var item2 = list[1];
var item3 = list[2] || -1; //|| 연산자를 이용하여 배열의 해당 인덱스에 값이 없으면 기본값으로 할당
var temp = item2; //배열의 두 값을 치환
item2 = item1;
item1 = temp;
var obj = {
    key1: 'one',
    key2: 'two',
};
var key1 = obj.key1; //객체의 키값을 변수에 할당
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value'; //|| 연산자를 이용하여 객체의 해당 키값이 없으면 기본값으로 할당
var newkey1 = obj.key1; //객체의 키값을 다른 변수에 할당
