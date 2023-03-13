//10, 20, 30을 문자열이 아닌 숫자로 변환하기

function parse(qs) {
  var queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  var chunks = qs.split('&');
  var result = {};
  for (var i = 0; i < chunks.length; i++) {
    var parts = chunks[i].split('=');
    var key = parts[0]; //key = 'banana'
    var value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value; // result = { banana: '10' }
  }
  return result;
}

// ES6의 forEach() 함수를 사용하면 반복문의 순번(i++)과 배열의 크기(chunks.length)를 따로 변수에 저장하는 과정을 생략할 수 있음
