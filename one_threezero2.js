//ȭ��ǥ �Լ��� �ݹ� �Լ��� this ������ ����� ������ ���ϱ� ���� bind() �Լ��� ����Ͽ� this ��ü�� �����ϴ� ������ ����
class MyClass {
    value = 10;
    constructor() {
        var addThis2 = function (first, second) {
            return this.value + first + second;
        }.bind(this);
        var addThis3 = (first, second) => this.value + first + second;
    }
}

//addThis2() �Լ��� this�� bind() �Լ��� �����Ͽ� this�� ������ ����
//addThis3() �Լ��� ��� ȭ��ǥ �Լ��̹Ƿ� ����