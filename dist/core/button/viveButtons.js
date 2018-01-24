System.register(['./Button', './Joystick', '../constants'], function (_export, _context) {
  "use strict";

  var Button, Joystick, CONST;
  return {
    setters: [function (_Button) {
      Button = _Button.Button;
    }, function (_Joystick) {
      Joystick = _Joystick.Joystick;
    }, function (_constants) {
      CONST = _constants;
    }],
    execute: function () {
      const viveLeftTouchpad = new Joystick(CONST.VIVE_LEFT_TOUCHPAD);

      _export('viveLeftTouchpad', viveLeftTouchpad);

      const viveLeftTrigger = new Button(CONST.VIVE_LEFT_TRIGGER);

      _export('viveLeftTrigger', viveLeftTrigger);

      const viveLeftGrip = new Button(CONST.VIVE_LEFT_GRIP);

      _export('viveLeftGrip', viveLeftGrip);

      const viveLeftMenu = new Button(CONST.VIVE_LEFT_MENU);

      _export('viveLeftMenu', viveLeftMenu);

      const viveRightTouchpad = new Joystick(CONST.VIVE_RIGHT_TOUCHPAD);

      _export('viveRightTouchpad', viveRightTouchpad);

      const viveRightTrigger = new Button(CONST.VIVE_RIGHT_TRIGGER);

      _export('viveRightTrigger', viveRightTrigger);

      const viveRightGrip = new Button(CONST.VIVE_RIGHT_GRIP);

      _export('viveRightGrip', viveRightGrip);

      const viveRightMenu = new Button(CONST.VIVE_RIGHT_MENU);

      _export('viveRightMenu', viveRightMenu);
    }
  };
});