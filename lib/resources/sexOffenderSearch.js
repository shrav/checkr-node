var sexOffenderSearch;
var request = require('request');

function sexOffenderSearch (config) {
  this.uri = config.endpoint + 'sex_offender_searches';
  this.apiKey = config.apiKey;
  return this;
}

sexOffenderSearch.prototype.retrieve = function (id, done) {
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

module.exports = sexOffenderSearch;
