//������ ���

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

//Circle Ŭ������ extends Ű���带 ����Ͽ� Shape Ŭ������ ���
//�θ��� �Լ��� ������ ��� super()�� ��� >> ���� Ŭ���� �Լ� ȣ��
//ES^�� ���� ����̳� �������̽��� �������� ����