System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            /**
             * Function for generating unique ID.
             * @returns {string} with format 'xxxxxxxx-xxxx-xxxxxxxx'
             */
            const UID = () => {
                const s4 = () => {
                    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
                };

                return `${s4()}${s4()}-${s4()}-${s4()}${s4()}`;
            };

            _export("UID", UID);
        }
    };
});