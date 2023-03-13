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
