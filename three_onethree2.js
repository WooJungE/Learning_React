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
