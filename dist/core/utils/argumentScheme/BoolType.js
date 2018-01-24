System.register(['./Type'], function (_export, _context) {
    "use strict";

    var Type;
    return {
        setters: [function (_Type) {
            Type = _Type.Type;
        }],
        execute: function () {
            class BoolType extends Type {
                constructor() {
                    super();
                }

                validate(val) {
                    if (!super.validate(val)) return false;
                    return typeof val === 'boolean';
                }
            }

            _export('BoolType', BoolType);
        }
    };
});