System.register(['../sculpt/Sculpt'], function (_export, _context) {
    "use strict";

    var Sculpt;
    return {
        setters: [function (_sculptSculpt) {
            Sculpt = _sculptSculpt.Sculpt;
        }],
        execute: function () {
            class Camera extends Sculpt {
                constructor(threeCamera = new THREE.Camera()) {
                    super(threeCamera);
                    this._threeCamera = this._threeObject;
                }

                get isCamera() {
                    return true;
                }

            }

            _export('Camera', Camera);
        }
    };
});