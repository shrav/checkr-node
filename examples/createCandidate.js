var Checkr = require('checkr-api')('83ebeabdec09f6670863766f792ead24d61fe3f9');

/* jshint camelcase: false */
Checkr.candidates.create({
  first_name: 'John',
  middle_name: 'Alfred',
  last_name: 'Smith',
  email: 'john.smith@gmail.com',
  phone: '5555555555',
  zipcode: '90401',
  dob: '1970-01-22',
  ssn: '543-43-4645',
  driver_license_state: 'CA',
  driver_license_number: 'F211165'
}, function (err, res) {
  console.log(res);
});
/* jshint camelcase: true */
