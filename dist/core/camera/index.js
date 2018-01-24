System.register(['./Camera', './PerspectiveCamera', './OrthographicCamera', './HMDCamera'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_Camera) {
      var _exportObj = {};

      for (var _key in _Camera) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _Camera[_key];
      }

      _export(_exportObj);
    }, function (_PerspectiveCamera) {
      var _exportObj2 = {};

      for (var _key2 in _PerspectiveCamera) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _PerspectiveCamera[_key2];
      }

      _export(_exportObj2);
    }, function (_OrthographicCamera) {
      var _exportObj3 = {};

      for (var _key3 in _OrthographicCamera) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _OrthographicCamera[_key3];
      }

      _export(_exportObj3);
    }, function (_HMDCamera) {
      var _exportObj4 = {};

      for (var _key4 in _HMDCamera) {
        if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _HMDCamera[_key4];
      }

      _export(_exportObj4);
    }],
    execute: function () {}
  };
});