System.register(['../error'], function (_export, _context) {
    "use strict";

    var ErrorAbstractClassInstance;
    return {
        setters: [function (_error) {
            ErrorAbstractClassInstance = _error.ErrorAbstractClassInstance;
        }],
        execute: function () {

            /**
             * Use it for sending messages with messenger
             */
            class Transport {
                constructor(name) {
                    if (this.constructor === Transport) {
                        throw new ErrorAbstractClassInstance('Transport');
                    }

                    this.name = name;
                }

                sendPacket() {
                    throw new Error('sendPacket is not overridden');
                }

                get isTransport() {
                    return true;
                }
            }

            _export('Transport', Transport);
        }
    };
});