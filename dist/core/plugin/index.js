System.register(['./Plugin', './SculptPlugin'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_Plugin) {
      var _exportObj = {};

      for (var _key in _Plugin) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _Plugin[_key];
      }

      _export(_exportObj);
    }, function (_SculptPlugin) {
      var _exportObj2 = {};

      for (var _key2 in _SculptPlugin) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _SculptPlugin[_key2];
      }

      _export(_exportObj2);
    }],
    execute: function () {}
  };
});