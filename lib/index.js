var Checkr = require('./resources/checkr');

var checkrFactory = function (config) {
  return new Checkr(config);
};

checkrFactory.Checkr = Checkr;

module.exports = checkrFactory;
