var checkrFactory = require('../lib/index.js');
var Checkr = new checkrFactory('83ebeabdec09f6670863766f792ead24d61fe3f9');
// var chai = require('chai');
// var expect = chai.expect;

/* jshint camelcase: false */
describe('Terrorist Watchlist Search', function () {

  describe('retrieve', function () {

    it('should have the correct defaults', function (done) {
      Checkr.terroristWatchlistSearch.retrieve('53f90552396466000ccc0000',
        function (err, res) {
          console.log(res);
          //expect(res.id).to.eql('53f90552396466000ccc0000');
          //expect(res.object).to.eql('test_terrorist_watchlist_search');
          //expect(res).to.have.property('records');
          return done();
      });
    });

    it('should error on bad id', function (done) {
      Checkr.terroristWatchlistSearch.retrieve('badId',
        function (err, res) {
          console.log(res);
          //expect(res.message).to.eql('Resource not found');
          return done();
      });
    });
  });
});
