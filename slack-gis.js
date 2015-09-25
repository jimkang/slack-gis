var config = require('./config');
var http = require('http');
var qs = require('qs');
var gis = require('google-images');
var _ = require('lodash');
var probable = require('probable');

console.log('The slack-gis webhook server is running.');

function takeRequest(req, res) {
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.end('OK');
  }
  else if (req.method === 'POST') {
    var body = '';

    req.on('data', function (data) {
      body += data;
    });

    req.on('end', function doneReadingData() {
      respondToRequestWithBody(req, body, res, headers);
    });
  }
  else {
    res.writeHead(304, headers);
    res.end();
  }
}

function respondToRequestWithBody(req, body, res, headers) {
  headers['Content-Type'] = 'text/json';

  var params = qs.parse(body);

  if (config.validWebhookTokens.indexOf(params.token) === -1) {
    res.writeHead(404);
    res.end();
  }
  else if (params.user_name === 'slackbot') {
    // Don't respond to self; avoid infinite loops.
    res.writeHead(200);
    res.end();
  }
  else if (typeof params.text === 'string') {
    // Remove internal Slack user id references.
    var messageText = params.text.replace(/<\@[\w\d]+>/g, '');
    messageText = messageText.replace(/^gis /, '');
    
    var response = {
      username: 'google-image-search',
      channel: params.channel_id
    };

    gis.search(messageText, respondWithImages);

    function respondWithImages(error, images) {
      if (error) {
        console.log(error);
        res.writeHead(200, headers);
        res.end();
      }
      else {
        response.text = summarizeImages(images);
        res.writeHead(200, headers);
        res.end(JSON.stringify(response));
      }
    }
  }  
}

function summarizeImages(images) {
  return probable.pickFromArray(images).url;
}

function defined(value) {
  return value !== undefined;
}

http.createServer(takeRequest).listen(config.webhookPort);

console.log('Webhook server listening at port:', config.webhookPort);
