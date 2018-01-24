'use strict';

System.register(['./constants', './button', './utils', './error', './time', './messenger', './eventEmitter', './scene', './initializer', './sculpt', './gamePad', './animation', './video', './rodinEvent', './raycaster', './loader', './plugin', './particleSystem', './avatar', './math', './transport', './device', './grid'], function (_export, _context) {
    "use strict";

    var CONST, Buttons, utils;
    return {
        setters: [function (_constants) {
            CONST = _constants;
        }, function (_button) {
            Buttons = _button;
        }, function (_utils) {
            utils = _utils;
        }, function (_error) {
            var _exportObj = {};

            for (var _key in _error) {
                if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _error[_key];
            }

            _export(_exportObj);
        }, function (_time) {
            var _exportObj2 = {};

            for (var _key2 in _time) {
                if (_key2 !== "default" && _key2 !== "__esModule") _exportObj2[_key2] = _time[_key2];
            }

            _export(_exportObj2);
        }, function (_messenger) {
            var _exportObj3 = {};

            for (var _key3 in _messenger) {
                if (_key3 !== "default" && _key3 !== "__esModule") _exportObj3[_key3] = _messenger[_key3];
            }

            _export(_exportObj3);
        }, function (_eventEmitter) {
            var _exportObj4 = {};

            for (var _key4 in _eventEmitter) {
                if (_key4 !== "default" && _key4 !== "__esModule") _exportObj4[_key4] = _eventEmitter[_key4];
            }

            for (var _key5 in _eventEmitter) {
                if (_key5 !== "default" && _key5 !== "__esModule") _exportObj4[_key5] = _eventEmitter[_key5];
            }

            _export(_exportObj4);
        }, function (_scene) {
            var _exportObj5 = {};

            for (var _key6 in _scene) {
                if (_key6 !== "default" && _key6 !== "__esModule") _exportObj5[_key6] = _scene[_key6];
            }

            _export(_exportObj5);
        }, function (_initializer) {
            var _exportObj6 = {};

            for (var _key7 in _initializer) {
                if (_key7 !== "default" && _key7 !== "__esModule") _exportObj6[_key7] = _initializer[_key7];
            }

            _export(_exportObj6);
        }, function (_sculpt) {
            var _exportObj7 = {};

            for (var _key8 in _sculpt) {
                if (_key8 !== "default" && _key8 !== "__esModule") _exportObj7[_key8] = _sculpt[_key8];
            }

            _export(_exportObj7);
        }, function (_gamePad) {
            var _exportObj8 = {};

            for (var _key9 in _gamePad) {
                if (_key9 !== "default" && _key9 !== "__esModule") _exportObj8[_key9] = _gamePad[_key9];
            }

            _export(_exportObj8);
        }, function (_animation) {
            var _exportObj9 = {};

            for (var _key10 in _animation) {
                if (_key10 !== "default" && _key10 !== "__esModule") _exportObj9[_key10] = _animation[_key10];
            }

            _export(_exportObj9);
        }, function (_video) {
            var _exportObj10 = {};

            for (var _key11 in _video) {
                if (_key11 !== "default" && _key11 !== "__esModule") _exportObj10[_key11] = _video[_key11];
            }

            _export(_exportObj10);
        }, function (_rodinEvent) {
            var _exportObj11 = {};

            for (var _key12 in _rodinEvent) {
                if (_key12 !== "default" && _key12 !== "__esModule") _exportObj11[_key12] = _rodinEvent[_key12];
            }

            _export(_exportObj11);
        }, function (_raycaster) {
            var _exportObj12 = {};

            for (var _key13 in _raycaster) {
                if (_key13 !== "default" && _key13 !== "__esModule") _exportObj12[_key13] = _raycaster[_key13];
            }

            _export(_exportObj12);
        }, function (_loader) {
            var _exportObj13 = {};

            for (var _key14 in _loader) {
                if (_key14 !== "default" && _key14 !== "__esModule") _exportObj13[_key14] = _loader[_key14];
            }

            _export(_exportObj13);
        }, function (_plugin) {
            var _exportObj14 = {};

            for (var _key15 in _plugin) {
                if (_key15 !== "default" && _key15 !== "__esModule") _exportObj14[_key15] = _plugin[_key15];
            }

            _export(_exportObj14);
        }, function (_particleSystem) {
            var _exportObj15 = {};

            for (var _key16 in _particleSystem) {
                if (_key16 !== "default" && _key16 !== "__esModule") _exportObj15[_key16] = _particleSystem[_key16];
            }

            _export(_exportObj15);
        }, function (_avatar) {
            var _exportObj16 = {};

            for (var _key17 in _avatar) {
                if (_key17 !== "default" && _key17 !== "__esModule") _exportObj16[_key17] = _avatar[_key17];
            }

            _export(_exportObj16);
        }, function (_math) {
            var _exportObj17 = {};

            for (var _key18 in _math) {
                if (_key18 !== "default" && _key18 !== "__esModule") _exportObj17[_key18] = _math[_key18];
            }

            _export(_exportObj17);
        }, function (_transport) {
            var _exportObj18 = {};

            for (var _key19 in _transport) {
                if (_key19 !== "default" && _key19 !== "__esModule") _exportObj18[_key19] = _transport[_key19];
            }

            _export(_exportObj18);
        }, function (_device) {
            var _exportObj19 = {};

            for (var _key20 in _device) {
                if (_key20 !== "default" && _key20 !== "__esModule") _exportObj19[_key20] = _device[_key20];
            }

            _export(_exportObj19);
        }, function (_grid) {
            var _exportObj20 = {};

            for (var _key21 in _grid) {
                if (_key21 !== "default" && _key21 !== "__esModule") _exportObj20[_key21] = _grid[_key21];
            }

            _export(_exportObj20);
        }],
        execute: function () {
            _export('CONST', CONST);

            _export('Buttons', Buttons);

            _export('utils', utils);

            let v = '0.0.7';

            _export('v', v);
        }
    };
});