System.register(['./string', './number', './object', './vector3', './enum', './3Dutils', './AScheme'], function (_export, _context) {
    "use strict";

    var string, number, object, vector3, Enum, utils3D;
    return {
        setters: [function (_string) {
            string = _string;
        }, function (_number) {
            number = _number;
        }, function (_object) {
            object = _object;
        }, function (_vector) {
            vector3 = _vector;
        }, function (_enum) {
            Enum = _enum;
        }, function (_Dutils) {
            utils3D = _Dutils;
        }, function (_AScheme) {
            var _exportObj = {};

            for (var _key in _AScheme) {
                if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _AScheme[_key];
            }

            _export(_exportObj);
        }],
        execute: function () {
            _export('string', string);

            _export('number', number);

            _export('object', object);

            _export('vector3', vector3);

            _export('Enum', Enum);

            _export('utils3D', utils3D);
        }
    };
});