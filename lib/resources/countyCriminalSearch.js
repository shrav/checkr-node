var countyCriminalSearch;
var request = require('request');

function countyCriminalSearch (config) {
  this.uri = config.endpoint + 'county_criminal_searches';
  this.apiKey = config.apiKey;
  return this;
}

countyCriminalSearch.prototype.retrieve = function (id, done) {
  request(
    {
      url: this.uri + '/' + id,
      auth: {
        user: this.apiKey,
        password: ''
      },
      headers: {
        'User-Agent': 'Checkr Node.js Wrapper'
      },
      json: true,
      method: 'GET'
    }, function (e, r, body) {
      if (body.message) {
        done(body.message, body);
      } else {
        done(e, body);
      }
    });
  return true;
};

module.exports = countyCriminalSearch;
