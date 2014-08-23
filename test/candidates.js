var checkrFactory = require('../lib/index.js');
var Checkr = new checkrFactory('83ebeabdec09f6670863766f792ead24d61fe3f9');
var chai = require('chai');
var expect = chai.expect;

/* jshint camelcase: false */
describe('Candidates', function () {

  describe('list', function () {

    it('should have the correct defaults', function (done) {
      Checkr.candidates.list(function (err, res) {
        expect(res.candidates).to.be.instanceof(Array);
        return done();
      });
    });
  });

  describe('retrieve', function () {

    it('should have the correct defaults', function (done) {
      Checkr.candidates.retrieve('d09e1465208a093631178753',
        function (err, res) {
          expect(res.id).to.eql('d09e1465208a093631178753');
          expect(res.object).to.eql('test_candidate');
          expect(res.first_name).to.eql('John');
          expect(res.last_name).to.eql('Smith');
          expect(res.dob).to.eql('1970-01-22');
          expect(res.phone).to.eql('5555555555');
          return done();
      });
    });

    it('should error on bad id', function (done) {
      Checkr.candidates.retrieve('badId',
        function (err, res) {
          expect(res.message).to.eql('Resource not found');
          return done();
      });
    });
  });

  describe('create', function () {

    it('should have the correct defaults', function (done) {
      var firstName = 'John';
      var middleName = 'Alfred';
      var lastName = 'Smith';
      var email = 'john.smith@gmail.com';
      var phone = '5555555555';
      var zipcode = '90401';
      var dob = '1970-01-22';
      var ssn = '543-43-4645';
      var driverLicenseState = 'CA';
      var driverLicenseNumber = 'F211165';
      Checkr.candidates.create({
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        email: email,
        phone: phone,
        zipcode: zipcode,
        dob: dob,
        ssn: ssn,
        driver_license_state: driverLicenseState,
        driver_license_number: driverLicenseNumber
      }, function (err, res) {
        expect(res).to.have.property('id');
        expect(res.object).to.eql('test_candidate');
        expect(res).to.have.property('uri');
        expect(res).to.have.property('created_at');
        expect(res.first_name).to.eql(firstName);
        expect(res.middle_name).to.eql(middleName);
        expect(res.last_name).to.eql(lastName);
        expect(res.dob).to.eql(dob);
        expect(res.ssn).to.eql('XXX-XX-4645');
        expect(res.email).to.eql(email);
        expect(res.zipcode).to.eql(zipcode);
        expect(res.phone).to.eql(phone);
        expect(res.driver_license_state).to.eql(driverLicenseState);
        expect(res.driver_license_number).to.eql(driverLicenseNumber);
        return done();
      });
    });

    it('should error without first name', function (done) {
      var middleName = 'Alfred';
      var lastName = 'Smith';
      var email = 'john.smith@gmail.com';
      var phone = '5555555555';
      var zipcode = '90401';
      var dob = '1970-01-22';
      var ssn = '543-43-4645';
      var driverLicenseState = 'CA';
      var driverLicenseNumber = 'F211165';
      Checkr.candidates.create({
        middle_name: middleName,
        last_name: lastName,
        email: email,
        phone: phone,
        zipcode: zipcode,
        dob: dob,
        ssn: ssn,
        driver_license_state: driverLicenseState,
        driver_license_number: driverLicenseNumber
      }, function (err, res) {
        expect(res.error).to.eql('first_name is missing');
        return done();
      });
    });
  });
});
