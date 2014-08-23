var chai         = require('chai');
var expect       = chai.expect;

describe('init', function () {
  it('should error when no api key', function (done) {
    try {
      require('../lib/resources/checkr.js')();
    }
    catch (err){
      expect(err).to.be.an.instanceof(Error);
    }
    done();
  });
});
