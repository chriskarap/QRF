System.register(['./Transport', '../constants', '../messenger'], function (_export, _context) {
    "use strict";

    var Transport, CONST, messenger;
    return {
        setters: [function (_Transport) {
            Transport = _Transport.Transport;
        }, function (_constants) {
            CONST = _constants;
        }, function (_messenger) {
            messenger = _messenger.messenger;
        }],
        execute: function () {

            /**
             * A transport for sending messages inside a single session
             */
            class LocalTransport extends Transport {
                constructor() {
                    super(CONST.LOCAL);
                }

                sendPacket(packet) {
                    messenger.receive(packet.channel, packet.body, this);
                }

                get isLocalTransport() {
                    return true;
                }
            }

            _export('LocalTransport', LocalTransport);

            const localTransport = new LocalTransport();

            _export('localTransport', localTransport);
        }
    };
});