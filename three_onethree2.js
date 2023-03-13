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
