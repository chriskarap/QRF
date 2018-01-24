System.register(['./Type'], function (_export, _context) {
    "use strict";

    var Type;
    return {
        setters: [function (_Type) {
            Type = _Type.Type;
        }],
        execute: function () {
            class AnyType extends Type {
                constructor() {
                    super();
                }
            }

            _export('AnyType', AnyType);
        }
    };
});