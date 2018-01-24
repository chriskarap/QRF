System.register(['./Sculpt', '../utils'], function (_export, _context) {
    "use strict";

    var Sculpt, AScheme;
    return {
        setters: [function (_Sculpt) {
            Sculpt = _Sculpt.Sculpt;
        }, function (_utils) {
            AScheme = _utils.AScheme;
        }],
        execute: function () {

            const constructorScheme = {
                radius: AScheme.number().default(.2),
                widthSegments: AScheme.number().default(10),
                heightSegments: AScheme.number().default(10),
                material: AScheme.any().hasProperty('isMaterial').default(() => new THREE.MeshBasicMaterial({ color: 0x336699 }))
            };

            /**
             * Simple Sphere
             * @extends Sculpt
             * @param radius {number} sphere radius
             * @param widthSegments {number}
             * @param heightSegments {number}
             * @param material {THREE.Material}
             * @memberof Sculpt
             */
            class Sphere extends Sculpt {
                constructor(...args) {
                    args = AScheme.validate(args, constructorScheme);

                    const threeSphere = new THREE.Mesh(new THREE.SphereGeometry(args.radius, args.widthSegments, args.heightSegments), args.material);
                    super(threeSphere);

                    this._radius = args.radius;
                }

                /**
                 * Gets the radius of current Sphere
                 * @type {Number}
                 */
                get radius() {
                    return this._radius;
                }

                // todo: add setter for radius
            }

            _export('Sphere', Sphere);
        }
    };
});