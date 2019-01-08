'use strict';

const express = require('express');

const app = express();

const port = process.env.PORT || 8000;

app.get('/hello/:message*?', (req, res) => {
	const body = {
		message: req.params.message || '',
	}
	res.json(body);
});

app.listen(port, () => {
	console.log('Server running on port ' + port);
});

module.exports = app;