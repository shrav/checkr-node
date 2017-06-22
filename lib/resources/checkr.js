'use strict';

var Candidates = require('./candidates');
var Invitations = require('./invitations');
var Reports = require('./reports');
var ssnTrace = require('./ssnTrace');
var sexOffenderSearch = require('./sexOffenderSearch');
var terroristWatchlistSearch = require('./terroristWatchlistSearch');
var nationalCriminalSearch = require('./nationalCriminalSearch');
var countyCriminalSearch = require ('./countyCriminalSearch');
var motorVehicleReport = require('./motorVehicleReport');

var Checkr = function (apiKey) {
  if (this === undefined) {
    return new Checkr(apiKey);
  }
  if (typeof apiKey === 'string') {
    this.endpoint = 'https://api.checkr.io/v1/';
    this.apiKey = apiKey;
  } else {
    throw new Error('API Key must be set');
  }
  this.candidates = new Candidates(this);
  this.invitations = new Invitations(this);
  this.reports = new Reports(this);
  this.ssnTrace = new ssnTrace(this);
  this.sexOffenderSearch = new sexOffenderSearch(this);
  this.terroristWatchlistSearch = new terroristWatchlistSearch(this);
  this.nationalCriminalSearch = new nationalCriminalSearch(this);
  this.countyCriminalSearch = new countyCriminalSearch(this);
  this.motorVehicleReport = new motorVehicleReport(this);
};

module.exports = Checkr;
