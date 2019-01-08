'use strict';

const requestPromise = require('request-promise');
const querystring = require('querystring');

const messageArg = process.argv && process.argv.length > 2 && process.argv[2] || '';

const options = {
	uri: 'http://localhost:8000/hello/' + querystring.escape(messageArg),
	json: true,
}
requestPromise(options)
	.then(response => {
		console.log(response.message != null ? response.message : '<no response>');
	})
	.catch(err => {
		console.log('ERROR: ' + err);
	});