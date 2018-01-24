System.register(['./utils', './Vector3', './Euler', './Quaternion', './shape/index'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_utils) {
      var _exportObj = {};

      for (var _key in _utils) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _utils[_key];
      }

      _export(_exportObj);
    }, function (_Vector) {
      var _exportObj2 = {};

      for (var _key2 in _Vector) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _Vector[_key2];
      }

      _export(_exportObj2);
    }, function (_Euler) {
      var _exportObj3 = {};

      for (var _key3 in _Euler) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _Euler[_key3];
      }

      _export(_exportObj3);
    }, function (_Quaternion) {
      var _exportObj4 = {};

      for (var _key4 in _Quaternion) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _Quaternion[_key4];
      }

      _export(_exportObj4);
    }, function (_shapeIndex) {
      var _exportObj5 = {};

      for (var _key5 in _shapeIndex) {
        if (_key5 !== "default" && _key5 !== "__esModule") _exportObj5[_key5] = _shapeIndex[_key5];
      }

      _export(_exportObj5);
    }],
    execute: function () {}
  };
});