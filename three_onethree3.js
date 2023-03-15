
function parse(qs) {
  const queryString = qs.substr(1); // querystring = 'banana=10&apple=20&orange=30'
  const chunks = queryString.split('&'); // chunks = ['banana=10', 'apple=20', 'orange=30']
  let result = {};
  chunks.forEach((chunk) => {
    const [ key, value ] = chunk.split('='); // key = 'banana', value = '10'
    result[key] = value; // result = { banana: '10' }
  });
  return result;
}
