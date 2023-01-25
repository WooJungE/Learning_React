//Ŭ����
//���� �ڹٽ�ũ��Ʈ ������ Ŭ���� ǥ������ ��� prototype���� Ŭ������ ǥ��
//ES6�� Ŭ������ ������ ����� �� ����

//���� �ڹٽ�ũ��Ʈ�� Ŭ���� ǥ�� ���
//�Լ��� ������(constructor)���·� ������ ���� ����� �ʿ��� ������ �Լ��� prototype ��ü�� �Ҵ��ϴ� ���
//prototype ��ü�� new �����ڷ� �����Ǵ� ��ü �ȿ��� this �������� �Լ� �� ���� ���� ��ġ�� ������ �� �ִ� ��� �̿�

function Shape (x, y) {
    this.name = 'Shape';
    this.move(x, y);
}
//static �Լ��� �����ϴ� ����
Shape.create = function (x, y) { return new Shape(x, y); };
//�ν��Ͻ� �Լ��� �����ϴ� ����
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
}
Shape.prototype.area = function () {
    return 0;
};
//Ȥ��
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

//new Shape(0, 0)�� ���� �Լ��� ȣ���ϸ� this ��ü�� �ش��ϴ� ���� �� �Լ��� prototype ��ü�� ����� ������ �Լ��� �Բ� ����
//ex) Shape()�Լ� (������)���� this.move�� �Լ��� �������� �ʾ����� prototype ��ü�� move() �Լ��� ���ǵǾ� ����
    //prototype ���� ���� new �����ڷ� Shape() �Լ��� ȣ���Ͽ� Shape ��ü s�� ����
    //s�� prototype ��ü �ȿ� �ִ� move() �Լ��� ������ �� ����
    //s�� prototype�� �߰��� ���ǵ� area() �Լ��� ������ �� ����
    //Ŭ������ ����� prototype ��ü�� ���� ��ü ���� �Լ��� ����� ������ ����� �̿�