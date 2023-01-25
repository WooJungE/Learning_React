//클래스
//기존 자바스크립트 문법은 클래스 표현식이 없어서 prototype으로 클래스를 표현
//ES6는 클래스를 정의해 사용할 수 있음

//기존 자바스크립트의 클래스 표현 방법
//함수를 생성자(constructor)형태로 선언한 다음 상속이 필요한 변수나 함수를 prototype 객체에 할당하는 방법
//prototype 객체는 new 연산자로 생성되는 객체 안에서 this 연산자의 함수 및 변수 선언 위치를 참조할 수 있는 요소 이용

function Shape (x, y) {
    this.name = 'Shape';
    this.move(x, y);
}
//static 함수를 선언하는 예제
Shape.create = function (x, y) { return new Shape(x, y); };
//인스턴스 함수를 선언하는 예제
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}
Shape.prototype.area = function () {
    return 0;
};
//혹은
Shape.prototype = {
    move: function (x, y) {
        this.x = x;
        this.y = y;
    },
    area: function () {
        return 0;
    }
};
var s = new Shape(0, 0);
s.area(); //0

//new Shape(0, 0)와 같이 함수를 호출하면 this 객체에 해당하는 변수 및 함수가 prototype 객체에 선언된 변수와 함수를 함께 참조
//ex) Shape()함수 (생성자)에는 this.move에 함수를 정의하지 않았지만 prototype 객체에 move() 함수가 정의되어 있음
    //prototype 선언 이후 new 연산자로 Shape() 함수를 호출하여 Shape 객체 s를 만듦
    //s는 prototype 객체 안에 있는 move() 함수를 참조할 수 있음
    //s는 prototype에 추가로 정의된 area() 함수도 참조할 수 있음
    //클래스의 상속은 prototype 객체의 값을 객체 내장 함수를 사용해 덮어씌우는 방식을 이용