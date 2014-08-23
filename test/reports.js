var checkrFactory = require('../lib/index.js');
var Checkr = new checkrFactory('83ebeabdec09f6670863766f792ead24d61fe3f9');
var chai = require('chai');
var expect = chai.expect;

/* jshint camelcase: false */
describe('Report', function () {

  describe('list', function () {

    it('should have the correct defaults', function (done) {
      Checkr.reports.list(function (err, res) {
        expect(res.reports).to.be.instanceof(Array);
        return done();
      });
    });
  });

  describe('retrieve', function () {

    it('should have the correct defaults', function (done) {
      Checkr.reports.retrieve('4821ab4939c53437ad3b6c1a',
        function (err, res) {
          expect(res.id).to.eql('4821ab4939c53437ad3b6c1a');
          expect(res.object).to.eql('test_report');
          expect(res.package).to.eql('driver_plus');
          expect(res.candidate_id).to.eql('e44aa283528e6fde7d542194');
          expect(res.ssn_trace_id).to.eql('53ee610e6432330006140000');
          expect(res.sex_offender_search_id).to.eql('53ee610e6432330006190000');
          expect(res.national_criminal_search_id)
            .to.eql('53ee610e6432330006170000');
          expect(res.motor_vehicle_report_id)
             .to.eql('53ee610e6432330006180000');
          return done();
      });
    });

    it('should error on bad id', function (done) {
      Checkr.reports.retrieve('badId',
        function (err, res) {
          expect(res.message).to.eql('Resource not found');
          return done();
      });
    });
  });

  describe('create', function () {

    it('should have the correct defaults', function (done) {
      var package = 'driver_plus';
      var candidateId = 'e44aa283528e6fde7d542194';
      Checkr.reports.create({
        package: package,
        candidate_id: candidateId
      }, function (err, res) {
        expect(res).to.have.property('id');
        expect(res.object).to.eql('test_report');
        expect(res.package).to.eql('driver_plus');
        expect(res).to.have.property('candidate_id');
        expect(res).to.have.property('ssn_trace_id');
        expect(res).to.have.property('sex_offender_search_id');
        expect(res).to.have.property('national_criminal_search_id');
        expect(res).to.have.property('motor_vehicle_report_id');
        return done();
      });
    });

    it('should error without candidate id', function (done) {
      var package = 'driver_plus';
      Checkr.reports.create({
        package: package
      }, function (err, res) {
        expect(res.error).to.eql('candidate_id is missing');
        return done();
      });
    });
  });

  describe('update', function () {

    it('should update the package', function (done) {
      var package = 'driver_standard';
      Checkr.reports.update('7dd7a4ac0fbb12ca4f09c6d8', {
        package: package
      }, function (err, res) {
        expect(res).to.have.property('id');
        expect(res.object).to.eql('test_report');
        expect(res.package).to.eql('driver_standard');
        expect(res).to.have.property('candidate_id');
        expect(res).to.have.property('ssn_trace_id');
        expect(res).to.have.property('sex_offender_search_id');
        expect(res).to.have.property('national_criminal_search_id');
        expect(res).to.have.property('motor_vehicle_report_id');
        return done();
      });
    });

    it('should error with bad id', function (done) {
      var package = 'driver_standard';
      Checkr.reports.update('badId', {
        package: package
      }, function (err, res) {
        expect(res.message).to.eql('Resource not found');
        return done();
      });
    });
  });
});
