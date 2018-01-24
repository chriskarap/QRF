System.register(['./mouseButtons', './cardboardButtons', './viveButtons', './oculusTouchButtons', './daydreamButtons'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_mouseButtons) {
      var _exportObj = {};

      for (var _key in _mouseButtons) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _mouseButtons[_key];
      }

      _export(_exportObj);
    }, function (_cardboardButtons) {
      var _exportObj2 = {};

      for (var _key2 in _cardboardButtons) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _cardboardButtons[_key2];
      }

      _export(_exportObj2);
    }, function (_viveButtons) {
      var _exportObj3 = {};

      for (var _key3 in _viveButtons) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _viveButtons[_key3];
      }

      _export(_exportObj3);
    }, function (_oculusTouchButtons) {
      var _exportObj4 = {};

      for (var _key4 in _oculusTouchButtons) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _oculusTouchButtons[_key4];
      }

      _export(_exportObj4);
    }, function (_daydreamButtons) {
      var _exportObj5 = {};

      for (var _key5 in _daydreamButtons) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _daydreamButtons[_key5];
      }

      _export(_exportObj5);
    }],
    execute: function () {}
  };
});