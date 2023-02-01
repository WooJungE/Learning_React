//화살표 함수
//ES6에 추가된 표현식을 사용하는 함수로 화살표 기호 =>로 함수를 선언
  //화살표 기둥 =을 사용하므로 fat arrow function이라고 부르기도 함

//기존 자바스크립트의 함수 사용 방법
function add(first, second) {
  return first + second;
}
//typeof add === 'function'
var add = function(first, second){
  return first + second;
};
//typeof add === 'function'

//typeof로 add와 'function'이라는 문자열을 비교해 보면 ture가 나옴
//첫 번째 방식은 함수 이름 있지만 두 번째는 없음



//크롬 브라우저 콘솔창에 add를 입력하고 enter를 누르면
/*
> function add(first, second) {
    return first + second;
  }
<- undefined

> add
<- f add(first, second){     //f add
    return first + second;
   }

> var add = function(first, second) {
    return first + second;
  }
<- undefined

> add
<- f (first, second) {     //f
    return first + second;
   }

>
*/

//f add와 f 이름 유무의 차이가 있음
//두 번째 방식은 이름이 없으므로 익명 함수임(anonymous function)
