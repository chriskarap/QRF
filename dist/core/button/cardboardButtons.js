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
      const cardboardTrigger = new Button(CONST.CARDBOARD_TRIGGER);

      _export('cardboardTrigger', cardboardTrigger);
    }
  };
});