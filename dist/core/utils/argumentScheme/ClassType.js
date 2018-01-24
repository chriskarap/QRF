System.register(['./Type'], function (_export, _context) {
	"use strict";

	var Type;
	return {
		setters: [function (_Type) {
			Type = _Type.Type;
		}],
		execute: function () {
			class ClassType extends Type {
				constructor(_class) {
					super();
					this._class = _class;
				}

				validate(val) {
					if (!super.validate(val)) return false;
					return val.constructor === this._class;
				}
			}

			_export('ClassType', ClassType);
		}
	};
});