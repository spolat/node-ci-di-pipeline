const request = require('supertest');

const app = require('../index');

describe('Get', function () {
    it('respond with hello wordld', function (done) {
        request(app).get('/').expect('hello world!', done());
    });
});