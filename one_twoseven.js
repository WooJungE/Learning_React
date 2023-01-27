//간결한 상속

...
class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
    area() {
        if (this.radius === 0) return super.area();
        return this.radius * this.radius;
    }
}
var c = new Circle(0, 0, 10);
c.area();

//100

//Circle 클래스는 extends 키워드를 사용하여 Shape 클래스를 상속
//부모의 함수를 참조할 경우 super()를 사용 >> 상위 클래스 함수 호출
//ES^는 다중 상속이나 인터페이스는 지원하지 않음