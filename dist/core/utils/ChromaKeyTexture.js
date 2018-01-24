System.register([], function (_export, _context) {
    "use strict";

    return {
        setters: [],
        execute: function () {
            class ChromaKeyMaterial extends THREE.ShaderMaterial {
                constructor(keyColor, texture) {
                    this.keyColorObject = new THREE.Color(keyColor);
                    this.setValues({
                        uniforms: {
                            texture: {
                                type: "t",
                                value: texture
                            },
                            color: {
                                type: "c",
                                value: this.keyColorObject
                            }
                        },
                        vertexShader: document.getElementById('vertexShader').textContent,
                        fragmentShader: document.getElementById('fragmentShader').textContent,

                        transparent: true
                    });
                }
            }

            _export("ChromaKeyMaterial", ChromaKeyMaterial);
        }
    };
});