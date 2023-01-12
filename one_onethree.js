var array1 = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [array1[0], array1[1], array2[0], array2[1]];
var combined = array1.concat(array2);
var combined = [].concat(array1, array2);
//const combined = [...array1, ...array2];
//결과: combined = ['one', 'two', 'three', 'four'];

var first = array1[0];
var second = array1[1];
var three = array1[2] || 'empty'; // \\ 연산자와 조합하면 추출할 배열 요소가 없을 때 기본값을 지정할 수 있음
//const [ first, second, three = 'empty', ...others ] = array1;
//결과: first = 'one', second = 'two', three = 'empty', others = []
//올바르지 못한 예
//var wrongArr = ...array1;

function func() {
    var args = Array.prototype.slice.call(this, arguments);
    var first = args[0];
    var others = args.slice(1, args.length);
}
//func(...args){ var [first, ...others] = args; }