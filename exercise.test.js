'use strict';

const tape = require('tape');
const exercise = require('./exercise.js');

tape('Module Pattern', function (test) {
  test.test('UrlParser', function (t) {
    const { UrlParser } = exercise;
    const url = 'https://example.com/hello?foo=1&bar=2';

    t.equal(typeof UrlParser, 'object', 'Expect module to be object');
    t.equal(typeof UrlParser.protocol, 'function', 'Expect protocol method');
    t.equal(typeof UrlParser.domain, 'function', 'Expect domain method');
    t.equal(typeof UrlParser.path, 'function', 'Expect path method');
    t.equal(typeof UrlParser.query, 'function', 'Expect querystring method');

    t.equal(UrlParser.protocol(url), 'https');
    t.equal(UrlParser.domain(url), 'example.com');
    t.equal(UrlParser.path(url), 'hello');
    t.equal(UrlParser.query(url), 'foo=1&bar=2');
    t.end();
  });


});
