var checkrFactory = require('../lib/index.js');
var Checkr = new checkrFactory('83ebeabdec09f6670863766f792ead24d61fe3f9');
var chai = require('chai');
var expect = chai.expect;

/* jshint camelcase: false */
describe('SSN Trace', function () {

  describe('retrieve', function () {

    it('should have the correct defaults', function (done) {
      Checkr.ssnTrace.retrieve('539fd88c101897f7cd000001',
        function (err, res) {
          expect(res.id).to.eql('539fd88c101897f7cd000001');
          expect(res.object).to.eql('test_ssn_trace');
          expect(res.ssn).to.eql('XXX-XX-4645');
          expect(res).to.have.property('addresses');
          return done();
      });
    });

    it('should error on bad id', function (done) {
      Checkr.ssnTrace.retrieve('badId',
        function (err, res) {
          expect(res.message).to.eql('Resource not found');
          return done();
      });
    });
  });
});
