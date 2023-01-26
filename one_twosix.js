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

//