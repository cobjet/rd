var https = require('https');
https.get("https://justmoon.net/", function(res) {
  console.log("Got response: " + res.statusCode);
  var buffer = '';
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    buffer += chunk;
  });
  res.on('end', function () {
    console.log('body', buffer);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
