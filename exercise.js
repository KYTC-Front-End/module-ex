/*
 * Exercise: Create some modules!
 *
 * When you think you have finished, run the command:
 *   npm run s2.modules
 * This will run a series of tests which should all pass.
 */
'use strict';

/*
 * Create a single module (using an IIFE) which contains functionality to parse
 * URLs.
 *
 * We have started you off with the basic structure.
 *
 *     https    ://   www.example.com  /   hello  ?  foo=1&bar=2
 * |          |     |                |   |      |  |             |
 * | protocol |     |    domain      |   | path |  | querystring |
 */
var UrlParser = (function () {

const protocol = (url) => {
  return url.split('://')[0];
}

const domain = (url) => {
  return url.split('/')[2];
}

const path = (url) => {
  return url.split('/')[3].split('?')[0];
}

const query = (url) => {
  return url.split('/')[3].split('?')[1];
}
return{
    // a function that takes a URL and returns its protocol
    protocol: protocol,

    // a function that takes a URL and returns its domain
    domain: domain,

    // a function that takes a URL and returns its path
    path: path,

    // a function that takes a URL and returns its query string
    query: query,
  };
})();



module.exports = {
  UrlParser,
};