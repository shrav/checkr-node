var checkrFactory = require('../lib/index.js');
var Checkr = new checkrFactory('83ebeabdec09f6670863766f792ead24d61fe3f9');
var chai = require('chai');
var expect = chai.expect;

/* jshint camelcase: false */
describe('Sex Offender Search', function () {

  describe('retrieve', function () {

    it('should have the correct defaults', function (done) {
      Checkr.sexOffenderSearch.retrieve('539fd88c101897f7cd000008',
        function (err, res) {
          expect(res.id).to.eql('539fd88c101897f7cd000008');
          expect(res.object).to.eql('test_sex_offender_search');
          expect(res).to.have.property('records');
          return done();
      });
    });

    it('should error on bad id', function (done) {
      Checkr.sexOffenderSearch.retrieve('badId',
        function (err, res) {
          expect(res.message).to.eql('Resource not found');
          return done();
      });
    });
  });
});
