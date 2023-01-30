//ES6의 화살표 함수 사용 방법
//화살표 함수는 익명 함수를 선언하여 변수에 대입하는 방법과 유사함
    //차이점은 function 키워드를 생략하고 인자 블록(())과 본문 블록({}) 사이에 =>를 표기

var add = (first, second) => { //기존의 함수 표현식을 화살표 함수로 변경
    return first + second;
};
var add = (first, second) => first + second;
//본문 블록이 비어 있고 결괏값을 바로 반환하는 경우에는 중괄호를 생략하고 => 뒤에 반환 표현식을 넣을 수 있음
var addAndMultiple = (first, second) => ({ add: first + second, multiply: first * second });
//반환값이 객체라면 괄호로 결괏값을 감싸 간결하게 표현할 수 있음