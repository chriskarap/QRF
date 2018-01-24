System.register(['../utils'], function (_export, _context) {
  "use strict";

  var Enum;
  return {
    setters: [function (_utils) {
      Enum = _utils.Enum;
    }],
    execute: function () {

      let KeyCodes = new Enum.EnumGenerator();

      const MOUSE_RIGHT = KeyCodes.value;

      _export('MOUSE_RIGHT', MOUSE_RIGHT);

      const MOUSE_LEFT = KeyCodes.next();

      _export('MOUSE_LEFT', MOUSE_LEFT);

      const MOUSE_WHEEL = KeyCodes.next();

      _export('MOUSE_WHEEL', MOUSE_WHEEL);

      const CARDBOARD_TRIGGER = KeyCodes.next();

      _export('CARDBOARD_TRIGGER', CARDBOARD_TRIGGER);

      const VIVE_LEFT_TOUCHPAD = KeyCodes.next();

      _export('VIVE_LEFT_TOUCHPAD', VIVE_LEFT_TOUCHPAD);

      const VIVE_LEFT_MENU = KeyCodes.next();

      _export('VIVE_LEFT_MENU', VIVE_LEFT_MENU);

      const VIVE_LEFT_TRIGGER = KeyCodes.next();

      _export('VIVE_LEFT_TRIGGER', VIVE_LEFT_TRIGGER);

      const VIVE_LEFT_GRIP = KeyCodes.next();

      _export('VIVE_LEFT_GRIP', VIVE_LEFT_GRIP);

      const VIVE_RIGHT_TOUCHPAD = KeyCodes.next();

      _export('VIVE_RIGHT_TOUCHPAD', VIVE_RIGHT_TOUCHPAD);

      const VIVE_RIGHT_MENU = KeyCodes.next();

      _export('VIVE_RIGHT_MENU', VIVE_RIGHT_MENU);

      const VIVE_RIGHT_TRIGGER = KeyCodes.next();

      _export('VIVE_RIGHT_TRIGGER', VIVE_RIGHT_TRIGGER);

      const VIVE_RIGHT_GRIP = KeyCodes.next();

      _export('VIVE_RIGHT_GRIP', VIVE_RIGHT_GRIP);

      const OCULUS_TOUCH_X = KeyCodes.next();

      _export('OCULUS_TOUCH_X', OCULUS_TOUCH_X);

      const OCULUS_TOUCH_Y = KeyCodes.next();

      _export('OCULUS_TOUCH_Y', OCULUS_TOUCH_Y);

      const OCULUS_TOUCH_LEFT_THUMBSTICK = KeyCodes.next();

      _export('OCULUS_TOUCH_LEFT_THUMBSTICK', OCULUS_TOUCH_LEFT_THUMBSTICK);

      const OCULUS_TOUCH_LEFT_GRIP = KeyCodes.next();

      _export('OCULUS_TOUCH_LEFT_GRIP', OCULUS_TOUCH_LEFT_GRIP);

      const OCULUS_TOUCH_LEFT_TRIGGER = KeyCodes.next();

      _export('OCULUS_TOUCH_LEFT_TRIGGER', OCULUS_TOUCH_LEFT_TRIGGER);

      const OCULUS_TOUCH_A = KeyCodes.next();

      _export('OCULUS_TOUCH_A', OCULUS_TOUCH_A);

      const OCULUS_TOUCH_B = KeyCodes.next();

      _export('OCULUS_TOUCH_B', OCULUS_TOUCH_B);

      const OCULUS_TOUCH_RIGHT_THUMBSTICK = KeyCodes.next();

      _export('OCULUS_TOUCH_RIGHT_THUMBSTICK', OCULUS_TOUCH_RIGHT_THUMBSTICK);

      const OCULUS_TOUCH_RIGHT_GRIP = KeyCodes.next();

      _export('OCULUS_TOUCH_RIGHT_GRIP', OCULUS_TOUCH_RIGHT_GRIP);

      const OCULUS_TOUCH_RIGHT_TRIGGER = KeyCodes.next();

      _export('OCULUS_TOUCH_RIGHT_TRIGGER', OCULUS_TOUCH_RIGHT_TRIGGER);

      const DAYDREAM_TRIGGER = KeyCodes.next();

      _export('DAYDREAM_TRIGGER', DAYDREAM_TRIGGER);
    }
  };
});