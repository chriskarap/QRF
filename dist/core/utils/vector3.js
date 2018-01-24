System.register(['./AScheme', './number', '../math'], function (_export, _context) {
    "use strict";

    var AScheme, number, Vector3;
    return {
        setters: [function (_AScheme) {
            AScheme = _AScheme.AScheme;
        }, function (_number) {
            number = _number;
        }, function (_math) {
            Vector3 = _math.Vector3;
        }],
        execute: function () {

            const addNoiseScheme = {
                vec: AScheme.any().hasProperty('isVector3').default(new Vector3(0, 0, 0)),
                e: AScheme.any().hasProperty('isVector3').default(new Vector3(1, 1, 1))
            };

            const addNoise = (...args) => {
                console.warn('utils vector3.addNoise is deprecated, use Vector3.addNoise method');
                args = AScheme.validate(args, addNoiseScheme);

                args.e = toVector3(args.e);

                const x = number.randomIn(-args.e.x / 2, args.e.x / 2);
                const y = number.randomIn(-args.e.y / 2, args.e.y / 2);
                const z = number.randomIn(-args.e.z / 2, args.e.z / 2);
                return args.vec.clone().add(new Vector3(x, y, z));
            };

            _export('addNoise', addNoise);

            const toVector3 = (r = null) => {
                if (r == null) return new Vector3(0, 0, 0);
                return r.isVector3 ? r : new Vector3(r, r, r);
            };

            _export('toVector3', toVector3);
        }
    };
});