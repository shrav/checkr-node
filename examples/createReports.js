var Checkr = require('checkr-api')('83ebeabdec09f6670863766f792ead24d61fe3f9');

/* jshint camelcase: false */
Checkr.reports.create({
  package: 'driver_plus',
  candidate_id: 'e44aa283528e6fde7d542194'
}, function (err, res) {
  console.log(res);
});
/* jshint camelcase: true */
