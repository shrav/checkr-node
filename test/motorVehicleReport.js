var checkrFactory = require('../lib/index.js');
var Checkr = new checkrFactory('83ebeabdec09f6670863766f792ead24d61fe3f9');
var chai = require('chai');
var expect = chai.expect;

/* jshint camelcase: false */
describe('Motor Vehicle Report', function () {

  describe('retrieve', function () {

    it('should have the correct defaults', function (done) {
      Checkr.motorVehicleReport.retrieve('539fd88c101897f7cd000007',
        function (err, res) {
          expect(res.id).to.eql('539fd88c101897f7cd000007');
          expect(res.object).to.eql('test_motor_vehicle_report');
          return done();
      });
    });

    it('should error on bad id', function (done) {
      Checkr.motorVehicleReport.retrieve('badId',
        function (err, res) {
          expect(res.message).to.eql('Resource not found');
          return done();
      });
    });
  });
});
