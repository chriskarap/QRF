System.register(['./PerspectiveCamera', '../sculpt', '../messenger', '../constants'], function (_export, _context) {
    "use strict";

    var PerspectiveCamera, Sculpt, messenger, CONST;
    return {
        setters: [function (_PerspectiveCamera) {
            PerspectiveCamera = _PerspectiveCamera.PerspectiveCamera;
        }, function (_sculpt) {
            Sculpt = _sculpt.Sculpt;
        }, function (_messenger) {
            messenger = _messenger.messenger;
        }, function (_constants) {
            CONST = _constants;
        }],
        execute: function () {

            // just a polyfill for now
            // will implement when RO-678 gets done

            class HMDCamera extends PerspectiveCamera {

                constructor(...args) {
                    super(...args);
                }

                get isHMDCamera() {
                    return true;
                }
            }

            _export('HMDCamera', HMDCamera);
        }
    };
});