//ES6의 클래스 사용 방법
//class 키워드로 클래스를 정의 -> 코드가 간결해짐

class Shape {
    static create(x, y) { return new Shape(x, y); }
    name = 'Shape'; //ES7에 포함된 클래스 확장 표현 
    //constructor() 함수 안에 this.name = 'Shape'로 클래스 변수 선언하는 것과 동일한 작업을 수행
    constructor(x, y) {
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
    area() {
        return 0;
    }
}
var s = new Shape(0, 0);
s.area(); 

//0

//class 키워드로 Shape 클래스를 정의함
//Shape 클래스 안에 생성자 함수도 추가됨
//클래스 정의 표현식에는 객체가 생성될 때 함께 만들어질 변수나 클래스 변수를 클래스 선언 블록 안에 같이 정의할 수 있게 변경됨
//생성자, 클래스 변수, 클래스 함수 정의에는 변수 선언을 위한 키워드(var, let, const, ...)를 사용하지 않음
