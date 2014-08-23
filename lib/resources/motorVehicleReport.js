var motorVehicleReport;
var request = require('request');

function motorVehicleReport (config) {
  this.uri = config.endpoint + 'motor_vehicle_reports';
  this.apiKey = config.apiKey;
  return this;
}

motorVehicleReport.prototype.retrieve = function (id, done) {
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

module.exports = motorVehicleReport;
