'use strict';

const app = require('../server');
const chai = require('chai');
const request = require('supertest');
const querystring = require('querystring');

const expect = chai.expect;

describe('GET hello', function () {
	it('Test empty message', (done)  => {
		request(app).get('/hello')
			.end((err, res) => {
				expect(res.statusCode).to.equal(200);
				expect(res.body.message).to.be.empty;
				done();
			});
	});
	it('Test one word message', (done)  => {
		const message = 'test';
		request(app).get('/hello/' + querystring.escape(message))
			.end((err, res) => {
				expect(res.statusCode).to.equal(200);
				expect(res.body.message).to.equal(message);
				done();
			});
	});
	it('Test two words message', (done)  => {
		const message = 'test message';
		request(app).get('/hello/' + querystring.escape(message))
			.end((err, res) => {
				expect(res.statusCode).to.equal(200);
				expect(res.body.message).to.equal(message);
				done();
			});
	});
});