System.register(['./AScheme'], function (_export, _context) {
    "use strict";

    var AScheme;
    return {
        setters: [function (_AScheme) {
            AScheme = _AScheme.AScheme;
        }],
        execute: function () {

            const addNoiseScheme = {
                n: AScheme.number().default(0),
                e: AScheme.number().default(0)
            };

            const addNoise = (...args) => {
                args = AScheme.validate(args, addNoiseScheme);

                const noise = Math.random() * 2 * args.e - args.e;
                return args.n + noise;
            };

            _export('addNoise', addNoise);

            const randomIn = (from = 0, to = 0) => {
                return Math.random() * (to - from) + from;
            };

            /**
             * Linearly interpolates between two numbers,
             * if given objects goes through them recursively
             * and does the same for all numerical values.
             * Non numerical values of objects are directly assigned
             * @param {Number|Object} a
             * @param {Number|Object} b
             * @param {Number} v
             * @returns {Number|Object}
             */

            _export('randomIn', randomIn);

            const lerp = (a, b, v) => {
                if (typeof a === 'object') {
                    const res = {};
                    for (let i in a) {
                        if (typeof a[i] !== 'object' && typeof a[i] !== 'number') {
                            res[i] = b;
                            continue;
                        }
                        res[i] = lerp(a[i], b[i], v);
                    }
                    return res;
                }

                return a + (b - a) * v;
            };

            _export('lerp', lerp);
        }
    };
});