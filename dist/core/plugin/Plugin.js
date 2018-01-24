System.register(['../eventEmitter'], function (_export, _context) {
    "use strict";

    var EventEmitter;
    return {
        setters: [function (_eventEmitter) {
            EventEmitter = _eventEmitter.EventEmitter;
        }],
        execute: function () {
            /**
             * Base class for plugins.
             * Extend plugin types from this class.
             */
            class Plugin extends EventEmitter {
                constructor() {
                    super();

                    this._enabled = true;
                }

                /**
                 * Shows if the plugin is enabled
                 * @returns {boolean}
                 */
                get isEnabled() {
                    return this._enabled;
                }

                /**
                 * Enables the plugin
                 */
                enable() {
                    this._enabled = true;
                }

                /**
                 * Disables the plugin
                 */
                disable() {
                    this._enabled = false;
                }

                /**
                 * Applies plugin to an Object
                 */
                applyTo() {}
            }

            _export('Plugin', Plugin);
        }
    };
});