System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            /**
             * Custom Error class.
             * @param {string} message - custom Error message.
             */
            class RodinError extends Error {
                constructor(message) {
                    super(message);
                    this.name = this.constructor.name;
                    this.message = message;
                    if (typeof Error.captureStackTrace === 'function') {
                        Error.captureStackTrace(this, this.constructor);
                    } else {
                        this.stack = new Error(message).stack;
                    }
                }
            }

            class ErrorAbstractClassInstance extends RodinError {
                constructor() {
                    super("Cant make instance of abstract class");
                }
            }

            _export("ErrorAbstractClassInstance", ErrorAbstractClassInstance);

            class ErrorSingletonClass extends RodinError {
                constructor() {
                    super("Instantiation failed. Use .getInstance() method instead of new");
                }
            }

            _export("ErrorSingletonClass", ErrorSingletonClass);

            class ErrorInvalidUrl extends RodinError {
                constructor(filed) {
                    super(`Invalid URL for ${filed}`);
                }
            }

            _export("ErrorInvalidUrl", ErrorInvalidUrl);

            class ErrorMAPClassInstance extends RodinError {
                constructor() {
                    super(`Error making instance of MAP class, use static fields`);
                }
            }

            _export("ErrorMAPClassInstance", ErrorMAPClassInstance);

            class ErrorNoSceneProvided extends RodinError {
                constructor() {
                    super(`Error no scene provided, use setScene method before raycastiong`);
                }
            }

            _export("ErrorNoSceneProvided", ErrorNoSceneProvided);

            class ErrorNoObjectProvided extends RodinError {
                constructor() {
                    super(`Error no THREEJS object provided`);
                }
            }

            _export("ErrorNoObjectProvided", ErrorNoObjectProvided);

            class ErrorNoValueProvided extends RodinError {
                constructor(field) {
                    super(`Error no ${field} provided`);
                }
            }

            _export("ErrorNoValueProvided", ErrorNoValueProvided);

            class ErrorMouseControllerAlreadyExists extends RodinError {
                constructor() {
                    super(`Error Mouse controller already exists`);
                }
            }

            _export("ErrorMouseControllerAlreadyExists", ErrorMouseControllerAlreadyExists);

            class ErrorCardboardControllerAlreadyExists extends RodinError {
                constructor() {
                    super(`Error Cardboard controller already exists`);
                }
            }

            _export("ErrorCardboardControllerAlreadyExists", ErrorCardboardControllerAlreadyExists);

            class ErrorViveControllerAlreadyExists extends RodinError {
                constructor(hand) {
                    super(`Error Vive controller already exists for ${hand} hand`);
                }
            }

            _export("ErrorViveControllerAlreadyExists", ErrorViveControllerAlreadyExists);

            class ErrorOculusControllerAlreadyExists extends RodinError {
                constructor() {
                    super(`Error Oculus controller already exists`);
                }
            }

            _export("ErrorOculusControllerAlreadyExists", ErrorOculusControllerAlreadyExists);

            class ErrorKeyboardControllerAlreadyExists extends RodinError {
                constructor() {
                    super(`Error Cardboard controller already exists`);
                }
            }

            _export("ErrorKeyboardControllerAlreadyExists", ErrorKeyboardControllerAlreadyExists);

            class ErrorInvalidFileFormat extends RodinError {
                constructor() {
                    super(`Invalid URL for ${filed}`);
                }
            }

            _export("ErrorInvalidFileFormat", ErrorInvalidFileFormat);

            class ErrorBadValueParameter extends RodinError {
                constructor(param) {
                    super(`Bad argument, expected ${param}`);
                }
            }

            _export("ErrorBadValueParameter", ErrorBadValueParameter);

            class ErrorProtectedFieldChange extends RodinError {
                constructor(field = '') {
                    super(`Protected field ${field} can not be changed`);
                }
            }

            _export("ErrorProtectedFieldChange", ErrorProtectedFieldChange);

            class ErrorProtectedMethodCall extends RodinError {
                constructor(method = '') {
                    super(`Protected method ${method} can not be called`);
                }
            }

            _export("ErrorProtectedMethodCall", ErrorProtectedMethodCall);

            class ErrorInvalidEventType extends RodinError {
                constructor(eventName = '', action = '') {
                    super(`Invalid event name ${eventName} for action ${action}`);
                }
            }

            _export("ErrorInvalidEventType", ErrorInvalidEventType);

            class ErrorParameterTypeDontMatch extends RodinError {
                constructor(paramName = '', type = '') {
                    super(`Parameter ${paramName} must be in type ${type}`);
                }
            }

            _export("ErrorParameterTypeDontMatch", ErrorParameterTypeDontMatch);

            class ErrorInstantiationFailed extends RodinError {
                constructor(classname) {
                    super(`Instantiation failed for class ${classname}. Use static functions instead of new`);
                }
            }

            _export("ErrorInstantiationFailed", ErrorInstantiationFailed);

            class ErrorUnsupportedModelType extends RodinError {
                constructor(typename) {
                    super(`Unsupported model type ${typename}.`);
                }
            }

            _export("ErrorUnsupportedModelType", ErrorUnsupportedModelType);

            class ErrorInvalidArgument extends RodinError {
                constructor(typename) {
                    super(`Invalid argument, expected a ${typename}`);
                }
            }

            _export("ErrorInvalidArgument", ErrorInvalidArgument);

            class ErrorProtectedClassInstance extends RodinError {
                constructor(classname) {
                    super(`Cant create instance of class ${classname}`);
                }
            }

            _export("ErrorProtectedClassInstance", ErrorProtectedClassInstance);

            class ErrorArgumentLoop extends RodinError {
                constructor() {
                    super(`Argument default value loop`);
                }
            }

            _export("ErrorArgumentLoop", ErrorArgumentLoop);

            class ErrorNoDefaultValue extends RodinError {
                constructor(argument) {
                    super(`No default value for argument ${argument}`);
                }
            }

            _export("ErrorNoDefaultValue", ErrorNoDefaultValue);

            class ErrorArgumentType extends RodinError {
                constructor(argument, type) {
                    super(`${JSON.stringify(argument)} is not ${argument.name}`);
                }
            }

            _export("ErrorArgumentType", ErrorArgumentType);

            class ErrorUndefinedReference extends RodinError {
                constructor(reference) {
                    super(`reference to ${reference} is not defined`);
                }
            }

            _export("ErrorUndefinedReference", ErrorUndefinedReference);

            class ErrorPluginAlreadyInstalled extends RodinError {
                constructor(plugin) {
                    super(`plugin ${plugin.name} was already installed on sculpt`);
                }
            }

            _export("ErrorPluginAlreadyInstalled", ErrorPluginAlreadyInstalled);

            class ErrorUnknownDevice extends RodinError {
                constructor(device) {
                    super(`unknown device ${device}`);
                }
            }

            _export("ErrorUnknownDevice", ErrorUnknownDevice);
        }
    };
});