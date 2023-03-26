//불변 변수(const)만을 사용하려면 map() 함수를 사용하면 됨
//map() 함수는 각 배열 요소를 정의된 함수를 통해 변환한 결괏값들로 새 배열을 반환
   //배열을 가공하여 새 배열을 만드는 함수

function parse(qs) {
  const queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  const chunks = qs.split('&'); // chunks = ['banana=10', 'apple=20', 'orange=30']
  const result = chunks.map((chunk) => {
    const [ key, value ] = chunk.split('='); // key = 'banana', value = '10'
    return { key: key, value: value }; // {key: 'banana', value: '10' }
  });
  return result;
}
//prase('banana=10&apple=20&orange=30') 실행결과
//result = [
//  { key: 'banana', value: '10' },
//  { key: 'apple', value: '20' },
//  { key: 'orange', value: '30'},
//  ];   

//forEach() 함수를 이용했을 때와 같은 결괏값을 출력하지만 map() 함수는 결괏값을 바로 반환하므로 가변 변수를 사용하지 않아도 됨
