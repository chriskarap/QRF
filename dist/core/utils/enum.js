System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class EnumGenerator {
                constructor() {
                    this.value = 1;
                }

                next() {
                    // todo: fix this
                    this.value += 1;
                    // this.value <<= 1;
                    return this.value;
                }
            }

            _export("EnumGenerator", EnumGenerator);
        }
    };
});