/**
 * Created by Reinchard on 10/10/2017.
 */
import * as R from 'rodin/core';

export class Dot {
    constructor() {
        this.dot = new R.Sculpt(new THREE.Mesh(new THREE.CircleGeometry(Dot.radius, 16), new THREE.MeshBasicMaterial({color: 0x3a4650})));
        this.dot.on(R.CONST.GAMEPAD_HOVER, this.onElementHover.bind(this));
        this.dot.on(R.CONST.GAMEPAD_HOVER_OUT, this.onElementHoverOut.bind(this));
        this.dot.needsUpdate = true;
        this.isActive = false;
        Dot.instances = this;
    }

    static instance = [];
    static radius = 0.008;

    onElementHover(e) {
        e.target.material.color.setHex('0x66b1ee');
    }

    static get height() {
        return Dot.radius
    }
    get element() {
        return this.dot
    }

    onElementHoverOut(e) {
        if (!this.isActive) {
            e.target.material.color.setHex('0x3a4650');
        }
    }

    set activeColor(color) {
        this.dot.material.color.setHex(color);
        this.dot._threeObject.material.needsUpdate = true;
    }

    static get instances() {
        return Dot.instance
    }

    static set instances(dot) {
        Dot.instance.push(dot)
    }
}