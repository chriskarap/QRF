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
                width: AScheme.number().default(.4),
                height: AScheme.number().default('$width'),
                widthSegments: AScheme.number().default(1),
                heightSegments: AScheme.number().default(1),
                material: AScheme.any().hasProperty('isMaterial').default(() => new THREE.MeshBasicMaterial({ color: 0x336699 }))
            };

            // TODO Aram: ete mi parametri default values urishic a veGalum, mihat jogenq et vong grenq docum. senc ok a ?

            /**
             * Simple Plane
             * @extends Sculpt
             * @param width [number = 4] plane width
             * @param height [number = '$width'] plane height
             * @param widthSegments [number = 1]
             * @param heightSegments [number = 1]
             * @param material {THREE.Material}
             * @memberof Sculpt
             */
            class Plane extends Sculpt {
                constructor(...args) {
                    args = AScheme.validate(args, constructorScheme);

                    const threePlane = new THREE.Mesh(new THREE.PlaneGeometry(args.width, args.height, args.widthSegments, args.heightSegments), args.material);
                    super(threePlane);

                    this._width = args.width;
                    this._height = args.height;

                    this._widthSegments = args.widthSegments;
                    this._heightSegments = args.heightSegments;
                }

                /**
                 * Gets width of current plane
                 * @returns {Number}
                 */
                get width() {
                    return this._width;
                }

                /**
                 * Gets height of current plane
                 * @returns {Number}
                 */
                get height() {
                    return this._height;
                }

                /**
                 * Gets width segments of current plane
                 * @returns {Number}
                 */
                get widthSegments() {
                    return this._widthSegments;
                }

                /**
                 * Gets height segments of current plane
                 * @returns {Number}
                 */
                get heightSegments() {
                    return this._heightSegments;
                }

                // todo: add setters
            }

            _export('Plane', Plane);
        }
    };
});