//���� �ڹٽ�ũ��Ʈ�� ���� ���� ��� ��� (��ü�� �迭�� Ư�� �ڷ�)

var list = [0, 1];
var item1 = list[0]; //�迭�� �ε����� ����Ͽ� ������ �Ҵ�
var item2 = list[1];
var item3 = list[2] || -1; //|| �����ڸ� �̿��Ͽ� �迭�� �ش� �ε����� ���� ������ �⺻������ �Ҵ�
var temp = item2; //�迭�� �� ���� ġȯ
item2 = item1;
item1 = temp;
var obj = {
    key1: 'one',
    key2: 'two',
};
var key1 = obj.key1; //��ü�� Ű���� ������ �Ҵ�
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value'; //|| �����ڸ� �̿��Ͽ� ��ü�� �ش� Ű���� ������ �⺻������ �Ҵ�
var newkey1 = obj.key1; //��ü�� Ű���� �ٸ� ������ �Ҵ�
