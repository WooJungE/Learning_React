// 배열 함수

//ES6의 forEach() 함수 사용 방법
//기존 자바스크립트로 문자열을 먼저 분리한 다음 forEach() 함수로 분리하여 비교
   //분리하는 문자열은 쿼리 스트링이라 불리는 것으로 '웹 주소에 포함시키는 문자열'을 의미

//기존 자바스크립트로 뭐리 스트링 'banana=10&apple=20&orange=30'을 & 문자를 기준으로 분리하여 객체에 담아 반환하는 parse() 함수를 선언한 것입니다.
function parse(qs) {
  var queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0]; //key = 'banana'
    var value = parts[1]; //value = '10'
    result[key] = value; // result = { banana: '10' }
  }
  return result;
}

//for문을 이용하여 banana, apple, orange와 10, 20, 30을 분리
