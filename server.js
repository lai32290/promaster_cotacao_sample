var request = require('request');
var url = 'http://api.promasters.net.br/cotacao/v1/moedas';

var options = {
    url: url,
    headers: {
        'User-Agent' : 'request',
    }
};

request(options, function(error, response, body) {
    console.log(JSON.parse(body));
});
