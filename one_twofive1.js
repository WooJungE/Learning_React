...
function Circle(x, y, radius) {
	Shape.call(this, x, y);
	this.name = 'Circle';
	this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype, {
	area: function () {
		return this.radius * this.radius;
	}
});
var c = new Circle(0, 0, 10);
c.area(); 

//100

//Circle() 함수를 만드는 방법으로 자식 클래스 생성
//자식 클래스 Circle은 내장 함수 call()을 통해 부모의 생성자를 호출하여 초깃값을 상속 받음 (자바의 super() 함수를 사용한 것과 비슷)
//부모 클래스 함수를 상속하는 방법으로는 Object에 내장 된 assign() 함수를 이용
//assign() 함수에 전달한 area() 함수는 Shape.prototype에 정의된 area() 함수를 덮어씌움
//코드 실행시 부모 클래스에 있는 area() 함수의 결괏값은 이후 덮어쓴 area() 함수의 결괏값인 100이 출력됨
