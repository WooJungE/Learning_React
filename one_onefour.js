//ES6의 객체 전개 연산자 사용 방법

var objectOne = { one: 1, two: 2, other:0 };
var objectTwo = { three: 3, four: 4, other: -1 };
var combined = {
    one: objectOne.one,
    two: objectOne.two,
    three: objectTwo.three,
    four: objectTwo.four,
};
var combined = Object.assign({}, objectOne, objectTwo);
//combined = { one: 1, two: 2, three: 3, four: 4, other: -1 }
var combined = Object.assign({}, objectTwo, objectOne);
//combined = { one: 1, two: 2, three: 3, four: 4, other: 0 }
var others = Object.assign({}, combined);
delete others.other;
//others = {one: 1, two: 2, three: 3, four: 4 }
