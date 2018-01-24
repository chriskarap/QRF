System.register(['./Button'], function (_export, _context) {
    "use strict";

    var Button;
    return {
        setters: [function (_Button) {
            Button = _Button.Button;
        }],
        execute: function () {
            /**
             * Joystick
             * Represents a Joystick on a GamePad, with overridden {x,y} coordinates as a value
             * @param [keyCode=0] {Number} KeyCode.
             * @param [navigatorButtonId=0] {Number} Navigator button ID.
             */
            class Joystick extends Button {
                constructor(keyCode = 0, navigatorButtonId = 0) {
                    super(keyCode, navigatorButtonId);
                    /**
                     * Overridden {x,y} coordinates as a value, {x:0, y:0} by default.
                     * @type {{x: number, y: number}}
                     */
                    this.value = {
                        x: 0,
                        y: 0
                    };
                }

                /**
                 * Checks if current object is Joystick.
                 * @returns {boolean}
                 */
                get isJoystick() {
                    return true;
                }
            }

            _export('Joystick', Joystick);
        }
    };
});