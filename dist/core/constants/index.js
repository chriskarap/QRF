System.register(['./messenger', './events', './keyCode', './gamePad', './hand', './transport', './device'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_messenger) {
      var _exportObj = {};

      for (var _key in _messenger) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _messenger[_key];
      }

      _export(_exportObj);
    }, function (_events) {
      var _exportObj2 = {};

      for (var _key2 in _events) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _events[_key2];
      }

      _export(_exportObj2);
    }, function (_keyCode) {
      var _exportObj3 = {};

      for (var _key3 in _keyCode) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _keyCode[_key3];
      }

      _export(_exportObj3);
    }, function (_gamePad) {
      var _exportObj4 = {};

      for (var _key4 in _gamePad) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _gamePad[_key4];
      }

      _export(_exportObj4);
    }, function (_hand) {
      var _exportObj5 = {};

      for (var _key5 in _hand) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _hand[_key5];
      }

      _export(_exportObj5);
    }, function (_transport) {
      var _exportObj6 = {};

      for (var _key6 in _transport) {
        if (_key6 !== "default" && _key6 !== "__esModule") _exportObj6[_key6] = _transport[_key6];
      }

      _export(_exportObj6);
    }, function (_device) {
      var _exportObj7 = {};

      for (var _key7 in _device) {
        if (_key7 !== "default" && _key7 !== "__esModule") _exportObj7[_key7] = _device[_key7];
      }

      _export(_exportObj7);
    }],
    execute: function () {}
  };
});