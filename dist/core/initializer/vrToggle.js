System.register(['../scene', '../device', '../messenger', '../constants', '../transport'], function (_export, _context) {
    "use strict";

    var Scene, device, messenger, CONST, postMessageTransport;
    return {
        setters: [function (_scene) {
            Scene = _scene.Scene;
        }, function (_device) {
            device = _device.device;
        }, function (_messenger) {
            messenger = _messenger.messenger;
        }, function (_constants) {
            CONST = _constants;
        }, function (_transport) {
            postMessageTransport = _transport.postMessageTransport;
        }],
        execute: function () {

            /**
             * Enters VR mode
             */
            const enterVR = () => {
                if (device.isVR) return false;

                window.mustShowRotateInstructions = false;
                Scene.webVRmanager.enterVRMode_();
                return true;
            };

            /**
             * Exits VR mode
             */

            _export('enterVR', enterVR);

            const exitVR = () => {
                if (!device.isVR) return false;

                Scene.webVRmanager.hmd.exitPresent();
                return true;
            };

            /**
             * Enter VR when someone requests
             */

            _export('exitVR', exitVR);

            messenger.on(CONST.ENTER_VR, (data, transport) => {
                if (transport === postMessageTransport) {
                    const status = enterVR();
                    const channel = status ? CONST.ENTER_VR_SUCCESS : CONST.ENTER_VR_ERROR;
                    messenger.post(channel, {
                        destination: [data.path[data.path.length - 1]],
                        timestamp: Date.now(),
                        isResponse: true
                    }, postMessageTransport);
                }
            });

            /**
             * Exit VR when someone requests
             */
            messenger.on(CONST.EXIT_VR, (data, transport) => {
                if (transport === postMessageTransport) {
                    const status = exitVR();
                    const channel = status ? CONST.EXIT_VR_SUCCESS : CONST.EXIT_VR_ERROR;
                    messenger.post(channel, {
                        destination: [data.path[data.path.length - 1]],
                        timestamp: Date.now(),
                        isResponse: true
                    }, postMessageTransport);
                }
            });
        }
    };
});