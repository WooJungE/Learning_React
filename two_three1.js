//라이브러리 의존성 관리
//의존성은 어떤 파일이나 코드가 다른 파일이나 코드를 필요로 하는 것
//기존 자바스크립트는 라이브러리나 모듈을 관리하는 방법이 불편했음 -> ES6에서 해결


//자바스크립트의 라이브러리 의존성 관리 방법
//script 엘리먼트를 이용하여 관리
//실제 동작은 하지 않음

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

//app.js, math.js 그리고 cloudflare.com에 저장된 제이쿼리 파일을 참조하도록 구성된 html 문서
//math.js는 수학 함수를 모아 모듈로 작성해둔 파일
//직접 만든 모듈을 공유할 때는 전역 변수 사용
    //lib 폴더에 있는 math.js에 sum() 함수와 pi를 선언했다면 다음과 같이 전역 변수를 선언하고 객체 안에 함수를 정의하여 담을 수 있음


/*
 // lib/math.js
 LibMath = {};
 LibMath.sum = function (x, y) { return x + y };
 LibMath.pi = 3.141593;
 */


//이후 다른 파일(루트 폴더의 app.js)에서 math.js에 정의된 함수를 참조하여 사용 가능
/*
// app.js
var math = LibMath;
$("#pi-label").text("2π = " + math.sum(math.pi, math.pi));
*/

//app.js는 math.js뿐만 아니라 제이쿼리까지 사용
//만약 html문서에서 app.js를 먼저 참조할 경우 정의되지 않은 함수를 참조하는 의존성 문제가 발생
//script 엘리먼트의 선언 순서가 매우 중요


//script 엘리먼트의 순서가 바뀌면 오류가 발생
/*
// app.js 작동하지 않는 경우
<script src="./app.js" language="javascript"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="./lib/math.js" language="javascript"></script>
...
*/


//ES6의 라이브러리 의존성 관리 방법
//ES6는 참조 순서에 따른 의존성 문제를 해결
    //import 구문을 사용하여 script 엘리먼트 없이 연결된 파일 및 의존 파일을 먼저 모두 내려 받고 코드를 구동하도록 변경

import MyModule from './MyModule.js';
//import 구문을 사용해 지정된 파일(MyModule.js)의 기본(default)으로 공유하는 모듈 부름
import { ModuleName } from './MyModule.js'; //이름을 맞춰 모듈 안의 특정 함수 혹은 변수를 참조할 수 있음
import { ModuleName as RenamedModuleName } from './MyModule.js';
//객체 구조 할당과 유사하게 특정 모듈을 가져올 때 이름이 충돌할 경우 다른 이름으로 변경하여 불러들일 수 있음
function Func() {
    MyModule();
}
export const CONST_VALUE = 0; //변수나 클래스의 이름을 다른 파일에서 따로 참조할 수 있도록 정의
export class MyClass { } //변수나 클래스의 이름을 다른 파일에서 따로 참조할 수 있도록 정의
export default new Func(); //현재 파일이 다른 파일에서 기본(default)으로 참조하게 되는 항목 정의