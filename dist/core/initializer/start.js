System.register(['../messenger', '../constants'], function (_export, _context) {
    "use strict";

    var messenger, CONST;
    return {
        setters: [function (_messenger) {
            messenger = _messenger.messenger;
        }, function (_constants) {
            CONST = _constants;
        }],
        execute: function () {

            /**
             * Call this method before setting up anything.
             * This will create renderer, domElement and VR buttons
             * @param params
             */

            let rodinStarted = false;
            const start = params => {
                if (rodinStarted) {
                    throw new Error('Rodin wal already started');
                }

                messenger.post(CONST.RODIN_STARTED, params);
            };

            _export('start', start);

            messenger.on(CONST.REQUEST_RODIN_STARTED, () => {

                // todo: send all params
                messenger.post(CONST.RODIN_STARTED, true);
            });
        }
    };
});