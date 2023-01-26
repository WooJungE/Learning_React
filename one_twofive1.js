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

//Circle() �Լ��� ����� ������� �ڽ� Ŭ���� ����
//�ڽ� Ŭ���� Circle�� ���� �Լ� call()�� ���� �θ��� �����ڸ� ȣ���Ͽ� �ʱ갪�� ��� ���� (�ڹ��� super() �Լ��� ����� �Ͱ� ���)
//�θ� Ŭ���� �Լ��� ����ϴ� ������δ� Object�� ���� �� assign() �Լ��� �̿�
//assign() �Լ��� ������ area() �Լ��� Shape.prototype�� ���ǵ� area() �Լ��� �����
//�ڵ� ����� �θ� Ŭ������ �ִ� area() �Լ��� �ᱣ���� ���� ��� area() �Լ��� �ᱣ���� 100�� ��µ�
