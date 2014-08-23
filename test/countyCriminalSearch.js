var checkrFactory = require('../lib/index.js');
var Checkr = new checkrFactory('83ebeabdec09f6670863766f792ead24d61fe3f9');
var chai = require('chai');
var expect = chai.expect;

/* jshint camelcase: false */
describe('County Criminal Search', function () {

  describe('retrieve', function () {

    it('should have the correct defaults', function (done) {
      Checkr.countyCriminalSearch.retrieve('539fdcf335644a0ef4000001',
        function (err, res) {
          expect(res.id).to.eql('539fdcf335644a0ef4000001');
          expect(res.object).to.eql('test_county_criminal_search');
          expect(res).to.have.property('records');
          return done();
      });
    });

    it('should error on bad id', function (done) {
      Checkr.countyCriminalSearch.retrieve('badId',
        function (err, res) {
          expect(res.message).to.eql('Resource not found');
          return done();
      });
    });
  });
});
