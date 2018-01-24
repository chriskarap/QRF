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
      const oculusTouchX = new Button(CONST.OCULUS_TOUCH_X);

      _export('oculusTouchX', oculusTouchX);

      const oculusTouchY = new Button(CONST.OCULUS_TOUCH_Y);

      _export('oculusTouchY', oculusTouchY);

      const oculusTouchLeftThumbstick = new Joystick(CONST.OCULUS_TOUCH_LEFT_THUMBSTICK);

      _export('oculusTouchLeftThumbstick', oculusTouchLeftThumbstick);

      const oculusTouchLeftGrip = new Button(CONST.OCULUS_TOUCH_LEFT_GRIP);

      _export('oculusTouchLeftGrip', oculusTouchLeftGrip);

      const oculusTouchLeftTrigger = new Button(CONST.OCULUS_TOUCH_LEFT_TRIGGER);

      _export('oculusTouchLeftTrigger', oculusTouchLeftTrigger);

      const oculusTouchA = new Button(CONST.OCULUS_TOUCH_A);

      _export('oculusTouchA', oculusTouchA);

      const oculusTouchB = new Button(CONST.OCULUS_TOUCH_B);

      _export('oculusTouchB', oculusTouchB);

      const oculusTouchRightThumbstick = new Joystick(CONST.OCULUS_TOUCH_RIGHT_THUMBSTICK);

      _export('oculusTouchRightThumbstick', oculusTouchRightThumbstick);

      const oculusTouchRightGrip = new Button(CONST.OCULUS_TOUCH_RIGHT_GRIP);

      _export('oculusTouchRightGrip', oculusTouchRightGrip);

      const oculusTouchRightTrigger = new Button(CONST.OCULUS_TOUCH_RIGHT_TRIGGER);

      _export('oculusTouchRightTrigger', oculusTouchRightTrigger);
    }
  };
});