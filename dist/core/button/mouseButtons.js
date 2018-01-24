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
      const mouseRight = new Button(CONST.MOUSE_RIGHT);

      _export('mouseRight', mouseRight);

      const mouseLeft = new Button(CONST.MOUSE_LEFT);

      _export('mouseLeft', mouseLeft);

      const mouseWheel = new Button(CONST.MOUSE_WHEEL);

      _export('mouseWheel', mouseWheel);
    }
  };
});