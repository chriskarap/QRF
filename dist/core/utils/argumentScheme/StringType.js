System.register(['./Type'], function (_export, _context) {
    "use strict";

    var Type;
    return {
        setters: [function (_Type) {
            Type = _Type.Type;
        }],
        execute: function () {
            class StringType extends Type {
                constructor() {
                    super();
                    this._minLength = 0;
                    this._maxLength = Infinity;
                    this._length = null;
                    // todo: check if null is ok with regexes
                    this._regex = null;
                }

                minLength(val) {
                    this._minLength = val;
                    return this;
                }

                maxLength(val) {
                    this._maxLength = val;
                    return this;
                }

                length(val) {
                    this._length = val;
                    return this;
                }

                regex(val) {
                    this._regex = val;
                    if (this._regex.constructor !== RegExp) this._regex = new RegExp(this._regex, 'gi');
                    return this;
                }

                validate(val) {
                    if (!super.validate(val)) return false;

                    if (val.constructor !== String || val.length < this._minLength || val.length > this._maxLength) return false;

                    if (this._length && val.length != this._length) return false;

                    if (this._regex && !this._regex.test(val)) return false;
                    return true;
                }
            }

            _export('StringType', StringType);
        }
    };
});