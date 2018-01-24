System.register(['./Type'], function (_export, _context) {
	"use strict";

	var Type;
	return {
		setters: [function (_Type) {
			Type = _Type.Type;
		}],
		execute: function () {
			class NumberType extends Type {
				constructor() {
					super();
					this._min = null;
					this._max = null;
				}

				min(val) {
					this.min = val;
					return this;
				}

				max(val) {
					this.max = val;
					return this;
				}

				validate(val) {
					if (!super.validate(val)) return false;
					return typeof val === 'number';
				}
			}

			_export('NumberType', NumberType);
		}
	};
});