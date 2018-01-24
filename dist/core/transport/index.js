System.register(['./Transport', './LocalTransport', './PostMessageTransport'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_Transport) {
      var _exportObj = {};

      for (var _key in _Transport) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _Transport[_key];
      }

      _export(_exportObj);
    }, function (_LocalTransport) {
      var _exportObj2 = {};

      for (var _key2 in _LocalTransport) {
        if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _LocalTransport[_key2];
      }

      _export(_exportObj2);
    }, function (_PostMessageTransport) {
      var _exportObj3 = {};

      for (var _key3 in _PostMessageTransport) {
        if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _PostMessageTransport[_key3];
      }

      _export(_exportObj3);
    }],
    execute: function () {}
  };
});