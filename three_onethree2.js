function parse(qs) {
  var queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  const chunks = queryString.split('&'); // chunks = ['banana=10', 'apple=20', 'orange=30']
  let result = {};
  chunks.forEach((chunk) => {
    const parts = chunks.split('='); //chunk = 'banana=10', parts = ['banana', '10']
    const key = parts[0]; //key = 'banana'
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value; // result = { banana: 10 }
  });
  return result;
}

// 키와 키값을 구조 분해 할당 방식으로 변환하면 위의 코드를 조금 더 간결하게 바꿀 수 있음
