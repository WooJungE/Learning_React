//ES6�� Ŭ���� ��� ���
//class Ű����� Ŭ������ ���� -> �ڵ尡 ��������

class Shape {
    static create(x, y) { return new Shape(x, y); }
    name = 'Shape'; //ES7�� ���Ե� Ŭ���� Ȯ�� ǥ�� 
    //constructor() �Լ� �ȿ� this.name = 'Shape'�� Ŭ���� ���� �����ϴ� �Ͱ� ������ �۾��� ����
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