//ȭ��ǥ �Լ��� �Լ� ǥ������ ������ �� �� ����
//���� Ŀ��(currying)�� ���� ������ ���Ͽ��� ���Ǵ� �Լ��� ��ȯ�� �� '����� �Լ� ����'�� ���� ������ ��������� �ʰ� ����

function addNumber(num) { //�Լ� ǥ������ ��ȯ
    return function (value) {
        return num + value;
    };
}
var addNumber = num => value => num + value; 
//ȭ��ǥ �Լ��� ����Ͽ� ������ �ڵ�� �Լ��� ��ȯ�� �� ����