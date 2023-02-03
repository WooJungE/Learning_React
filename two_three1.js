//���̺귯�� ������ ����
//�������� � �����̳� �ڵ尡 �ٸ� �����̳� �ڵ带 �ʿ�� �ϴ� ��
//���� �ڹٽ�ũ��Ʈ�� ���̺귯���� ����� �����ϴ� ����� �������� -> ES6���� �ذ�


//�ڹٽ�ũ��Ʈ�� ���̺귯�� ������ ���� ���
//script ������Ʈ�� �̿��Ͽ� ����
//���� ������ ���� ����

/*
<html>
    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="./lib/math.js" language="javascript"></script>
        <script src="./app.js" language="javascript"></script>
        ...
    </head>
    ...
    <span id="pi-label></span>
 */

//app.js, math.js �׸��� cloudflare.com�� ����� �������� ������ �����ϵ��� ������ html ����
//math.js�� ���� �Լ��� ��� ���� �ۼ��ص� ����
//���� ���� ����� ������ ���� ���� ���� ���
    //lib ������ �ִ� math.js�� sum() �Լ��� pi�� �����ߴٸ� ������ ���� ���� ������ �����ϰ� ��ü �ȿ� �Լ��� �����Ͽ� ���� �� ����


/*
 // lib/math.js
 LibMath = {};
 LibMath.sum = function (x, y) { return x + y };
 LibMath.pi = 3.141593;
 */


//���� �ٸ� ����(��Ʈ ������ app.js)���� math.js�� ���ǵ� �Լ��� �����Ͽ� ��� ����
/*
// app.js
var math = LibMath;
$("#pi-label").text("2�� = " + math.sum(math.pi, math.pi));
*/

//app.js�� math.js�Ӹ� �ƴ϶� ������������ ���
//���� html�������� app.js�� ���� ������ ��� ���ǵ��� ���� �Լ��� �����ϴ� ������ ������ �߻�
//script ������Ʈ�� ���� ������ �ſ� �߿�


//script ������Ʈ�� ������ �ٲ�� ������ �߻�
/*
// app.js �۵����� �ʴ� ���
<script src="./app.js" language="javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="./lib/math.js" language="javascript"></script>
...
*/


//ES6�� ���̺귯�� ������ ���� ���
//ES6�� ���� ������ ���� ������ ������ �ذ�
    //import ������ ����Ͽ� script ������Ʈ ���� ����� ���� �� ���� ������ ���� ��� ���� �ް� �ڵ带 �����ϵ��� ����

import MyModule from './MyModule.js';
//import ������ ����� ������ ����(MyModule.js)�� �⺻(default)���� �����ϴ� ��� �θ�
import { ModuleName } from './MyModule.js'; //�̸��� ���� ��� ���� Ư�� �Լ� Ȥ�� ������ ������ �� ����
import { ModuleName as RenamedModuleName } from './MyModule.js';
//��ü ���� �Ҵ�� �����ϰ� Ư�� ����� ������ �� �̸��� �浹�� ��� �ٸ� �̸����� �����Ͽ� �ҷ����� �� ����
function Func() {
    MyModule();
}
export const CONST_VALUE = 0; //������ Ŭ������ �̸��� �ٸ� ���Ͽ��� ���� ������ �� �ֵ��� ����
export class MyClass { } //������ Ŭ������ �̸��� �ٸ� ���Ͽ��� ���� ������ �� �ֵ��� ����
export default new Func(); //���� ������ �ٸ� ���Ͽ��� �⺻(default)���� �����ϰ� �Ǵ� �׸� ����