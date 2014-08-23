var Checkr = require('checkr-api')('83ebeabdec09f6670863766f792ead24d61fe3f9');

Checkr.countyCriminalSearch.retrieve('539fdcf335644a0ef4000001',
  function (err, res) {
    console.log(res);
});
