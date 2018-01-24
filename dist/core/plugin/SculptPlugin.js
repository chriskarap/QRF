System.register(['./Plugin'], function (_export, _context) {
    "use strict";

    var Plugin;
    return {
        setters: [function (_Plugin) {
            Plugin = _Plugin.Plugin;
        }],
        execute: function () {

            /**
             * Base class for sculpt plugins
             * Extend this for creating sculpt plugins
             */
            class SculptPlugin extends Plugin {
                constructor() {
                    super();
                }

                /**
                 * Applies plugin to a sculpt
                 * @param sculpt
                 */
                applyTo(sculpt) {
                    this.sculpt = sculpt;
                }
            }

            _export('SculptPlugin', SculptPlugin);
        }
    };
});