System.register(['./GamePad', '../messenger', '../constants', '../button', '../sculpt/GazePoint', '../scene', '../avatar/Avatar'], function (_export, _context) {
    "use strict";

    var GamePad, messenger, CONST, Buttons, GazePoint, Scene, Avatar;
    return {
        setters: [function (_GamePad) {
            GamePad = _GamePad.GamePad;
        }, function (_messenger) {
            messenger = _messenger.messenger;
        }, function (_constants) {
            CONST = _constants;
        }, function (_button) {
            Buttons = _button;
        }, function (_sculptGazePoint) {
            GazePoint = _sculptGazePoint.GazePoint;
        }, function (_scene) {
            Scene = _scene.Scene;
        }, function (_avatarAvatar) {
            Avatar = _avatarAvatar.Avatar;
        }],
        execute: function () {

            /**
             * Custom (virtual) navigator gamepad class, for CardboardGamePad.
             */


            // todo: implement with messenger
            class CardboardNavigatorGamePad {

                constructor() {
                    /**
                     * Bulk XY coordinates in the document.
                     * @type {number[]}
                     */
                    this.axes = [0, 0];
                    /**
                     * Cardboard button state.
                     * @type {Object[]}
                     */
                    this.buttons = [{
                        pressed: false,
                        touched: false,
                        value: 0
                    }];
                    /**
                     * Bulk connection state.
                     * @type {boolean}
                     */
                    this.connected = true;
                    /**
                     * Bulk id, not used at the moment.
                     * @type {number}
                     */
                    this.displayId = 0;
                    /**
                     * Hand (left/right), not used at the moment.
                     * @type {string}
                     */
                    this.hand = "";
                    /**
                     * Gamepad ID.
                     * @type {string}
                     */
                    this.id = "Cardboard Gamepad";
                    /**
                     * Indicates whether the mousedown event should propagate to the document or not.
                     * @type {boolean}
                     */
                    this.stopPropagationOnMouseDown = false;
                    /**
                     * Indicates whether the mouseup event should propagate to the document or not.
                     * @type {boolean}
                     */
                    this.stopPropagationOnMouseUp = false;

                    let cardboardDown = () => {
                        this.buttons[0].pressed = true;
                        if (this.stopPropagationOnMouseDown) {
                            event.stopPropagation();
                        }
                    };

                    let cardboardUp = () => {
                        this.buttons[0].pressed = false;
                        if (this.stopPropagationOnMouseUp) {
                            event.stopPropagation();
                        }
                    };

                    document.body.addEventListener('touchstart', cardboardDown, false);
                    document.body.addEventListener('touchend', cardboardUp, false);
                    document.body.addEventListener('contextmenu', e => {
                        e.preventDefault();
                    }, false);
                }
            }

            /**
             * A gamepad class for describing event handlers for cardboard use. Transfers the mobile screen touch event to the raycasted (gaze point) object.
             */

            _export('CardboardNavigatorGamePad', CardboardNavigatorGamePad);

            class CardboardGamePad extends GamePad {
                constructor() {
                    super("cardboard", null, CONST.VR);
                    this.buttons = [Buttons.cardboardTrigger];
                    let gp = new GazePoint();
                    gp.Sculpt.on("ready", () => {
                        this.setGazePoint(gp);
                        this.disable();
                    });
                }

                /**
                 * Set GazePoint
                 * @param {THREE.Object3D} gazePoint object to add
                 */
                setGazePoint(gazePoint) {
                    gazePoint.controller = this;
                    this.gazePoint = gazePoint;

                    // todo: gazepoint@ tanel scene@ poxeluc
                    // todo: vabshe es gazepoint@ hanel rad anel normal sarqel
                    Scene.HMDCamera.add(this.gazePoint.Sculpt);
                }

                /**
                 * Enables Cardboard Gamepad, adds the gaze point object to the camera if set.
                 */
                enable() {
                    super.enable();
                    if (this.gazePoint) {
                        Scene.HMDCamera.add(this.gazePoint.Sculpt);
                    }
                }

                /**
                 * Disables Cardboard gamepad, removes the gaze point object from the camera if set.
                 */
                disable() {
                    super.disable();
                    if (this.gazePoint) {
                        Scene.HMDCamera.remove(this.gazePoint.Sculpt);
                    }
                }

                /**
                 * Get raycasted objects ({distance, point, face, faceIndex, indices, object}) that are in camera's center (gaze point).
                 * @returns {Sculpt[]}
                 */
                getIntersections() {
                    // todo: use our custom camera later
                    this.raycaster.set(Avatar.active.HMDCamera.globalPosition, Avatar.active.HMDCamera._threeCamera.getWorldDirection());
                    return this.raycaster.raycast(this.raycastLayers);
                }
            }

            _export('CardboardGamePad', CardboardGamePad);

            messenger.post(CONST.REQUEST_RODIN_STARTED);

            messenger.once(CONST.RODIN_STARTED, () => {
                navigator.cardboardGamePad = new CardboardNavigatorGamePad();
                GamePad.cardboard = new CardboardGamePad();
            });
        }
    };
});