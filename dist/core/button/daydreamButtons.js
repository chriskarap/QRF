System.register(['./Button', '../constants'], function (_export, _context) {
  "use strict";

  var Button, CONST;
  return {
    setters: [function (_Button) {
      Button = _Button.Button;
    }, function (_constants) {
      CONST = _constants;
    }],
    execute: function () {
      const daydreamTrigger = new Button(CONST.DAYDREAM_TRIGGER);

      _export('daydreamTrigger', daydreamTrigger);
    }
  };
});