//화살표 함수는 콜백 함수의 this 범위로 생기는 오류를 피하기 위해 bind() 함수를 사용하여 this 객체를 전달하는 과정을 포함
class MyClass {
    value = 10;
    constructor() {
        var addThis2 = function (first, second) {
            return this.value + first + second;
        }.bind(this);
        var addThis3 = (first, second) => this.value + first + second;
    }
}

//addThis2() 함수는 this를 bind() 함수에 전달하여 this의 범위를 유지
//addThis3() 함수의 경우 화살표 함수이므로 생략