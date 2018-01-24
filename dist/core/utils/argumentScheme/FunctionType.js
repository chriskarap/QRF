System.register(['./Type'], function (_export, _context) {
	"use strict";

	var Type;
	return {
		setters: [function (_Type) {
			Type = _Type.Type;
		}],
		execute: function () {
			class FunctionType extends Type {
				constructor() {
					super();
				}

				validate(val) {
					if (typeof val === 'function') return true;
				}
			}

			_export('FunctionType', FunctionType);
		}
	};
});