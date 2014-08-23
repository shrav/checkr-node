# Checkr Node.js Bindings
[![NPM version](https://badge.fury.io/js/checkr-api.svg)](https://npmjs.org/package/checkr-api) [![Downloads](http://img.shields.io/npm/dm/checkr-api.svg)](https://npmjs.org/package/checkr-api)  [![Build Status](https://travis-ci.org/shrav/checkr-node.svg?branch=master)](https://travis-ci.org/shrav/checkr-node) [![Dependency Status](http://img.shields.io/gemnasium/shrav/checkr-node.svg)](https://gemnasium.com/shrav/checkr-node) [![Coverage Status](https://img.shields.io/coveralls/shrav/checkr-node.svg)](https://coveralls.io/r/shrav/checkr-node?branch=master)


Node.js wrapper for the [Checkr.io](http://www.checkr.io) API.

## Installation

Checkr-node can be installed through the npm:

```
$ npm install checkr-api
```

## Getting Started

In order to use the client, you must have an API key. To obtain your key, you need to first create an account at [www.checkr.io](https://www.checkr.io/)

## Usage

```javascript
var Checkr = require('checkr-api')('API_KEY');
```

## Running the test-suite

```javascript
gulp test
```

## Author
Developed by [Shrav Mehta](www.shravmehta.com).
