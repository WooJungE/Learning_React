//화살표 함수는 함수 표현식을 간결히 할 수 있음
//이후 커링(currying)과 같은 디자인 패턴에서 사용되는 함수를 반환할 때 '계단형 함수 선언'과 같은 구조가 만들어지지 않게 해줌

function addNumber(num) { //함수 표현식을 반환
    return function (value) {
        return num + value;
    };
}
var addNumber = num => value => num + value; 
//화살표 함수를 사용하여 간결한 코드로 함수를 반환할 수 있음