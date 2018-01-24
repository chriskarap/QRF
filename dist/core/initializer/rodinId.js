System.register(['../utils/string'], function (_export, _context) {
  "use strict";

  var UID;
  return {
    setters: [function (_utilsString) {
      UID = _utilsString.UID;
    }],
    execute: function () {

      /**
       * Unique id for each RODIN session
       * @type {string}
       */
      const RODIN_ID = UID();

      _export('RODIN_ID', RODIN_ID);
    }
  };
});