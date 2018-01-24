import * as R from 'rodin/core';
import {Sky} from './Sky.js';
import {resort} from './terrain.js';
import {clouds} from './clouds.js';
import {Timeline} from './timeline.js';
import './interface.js';

R.start();
R.Text3D.loadFont("./fonts/Product_sans_regular.json");
R.Text3D.loadFont("./fonts/Product_sans_bold.json");

const ambientLight = R.Scene.active._scene.children.filter(i => i instanceof THREE.AmbientLight)[0];
ambientLight.intensity = 0.7;
const rgb = hslToRgb(25, 1, 1);
ambientLight.color.setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);

R.Avatar.active.HMDCamera._threeObject.far = 500;
R.Avatar.active.HMDCamera.focalLength = 11;

const light = new THREE.DirectionalLight(0xffffff, 0.8, 200);
light.position.set(-30, 25, 30);

R.Scene.add(resort);
R.Scene.add(new R.Sculpt(light));

// Add Sun Helper
let sunSphere = new R.Sphere(5, 32, 32, new THREE.MeshBasicMaterial({
    color: 0xffffff,
    map: R.Loader.loadTexture("./img/moon.jpg")
}));
sunSphere.position.y = -150;
sunSphere.rotation.y = -Math.PI / 2;
sunSphere.visible = true;

const sky = new Sky({
    "turbidity": 6.5,
    "rayleigh": 0.252,
    "mieCoefficient": 0.002,
    "mieDirectionalG": 0.998,
    "luminance": 1,
    "inclination": 0.28,
    "azimuth": 0.37,
    "sun": false
}, sunSphere, light, 130.5);
R.Scene.add(sky);

sky.rotation.y = Math.PI / 2;
sky.position.y = 0;


const popUp = new R.AnimationClip("popUp", {
    scale: {
        x: {from: 0.01, to: 1.0},
        y: {from: 0.01, to: 1.0},
        z: {from: 0.01, to: 1.0}
    }
});
popUp.duration(800);
popUp.easing(R.AnimationClip.EASING.Elastic.Out);
sunSphere.animation.add(popUp);


const fadeinSunAnim = new R.AnimationClip("fadeinSunAnim", {
    effectController: {
        turbidity: {from: 1.0, to: 6.5}
    }
});
fadeinSunAnim.duration(200);
sky.animation.add(fadeinSunAnim);

const fadeoutSunAnim = new R.AnimationClip("fadeoutSunAnim", {
    effectController: {
        turbidity: {from: 6.5, to: 1.0}
    }
});
fadeoutSunAnim.duration(200);
sky.animation.add(fadeoutSunAnim);


sky.on(R.CONST.ANIMATION_COMPLETE, (e) => {
    if (e.animation === 'fadeinSunAnim' || e.animation === 'fadeoutSunAnim') {
        sky.constUpdate = false;
    }
});


R.Scene.active.on(R.CONST.GAMEPAD_BUTTON_UP, (e) => {
    sky.engaged = false;
    navigator.mouseGamePad.stopPropagationOnMouseMove = false;
});

clouds.on(R.CONST.READY, (evt) => {
    R.Scene.add(evt.target);
    clouds.scale.set(20, 20, 20);
    clouds.visible = false;
    evt.target.position.copy(resort.position);
    evt.target.position.z -= 10;

    evt.target.rotation.y = -Math.PI / 2;
});

const timeline = new Timeline(72, 20, -Math.PI / 8, Math.PI + Math.PI / 4, sky);

R.messenger.once(R.CONST.ALL_SCULPTS_READY, () => {
    document.getElementById('img').style.display = "none";
    document.getElementById('pulsating-circle').style.display = "none";
    sky.update();
    R.Scene.add(timeline);

    timeline.rotation.y = Math.PI / 2;
    timeline.rotation.x = Math.PI / 2.4;
    timeline.position.y = 10;
    timeline.position.x = 0;
    timeline.position.z = -70;

    timeline.init(sky, resort);
    sky.on(R.CONST.GAMEPAD_BUTTON_DOWN, (e) => {
        if (sky.engaged) {
            sky.engagedPoint = e.point.x
        }
    });
    sky.on(R.CONST.GAMEPAD_MOVE, (e) => {
        if (sky.engaged) {
            let angle = resort.getAngle(e.point, "x", "y");
            if (angle < 0) {
                angle += 2 * Math.PI
            }

            const diff = angle - sky.engagedAngle;
            angle = sky.engagedInclination - diff / 3.6;

            if (angle > 0.5) {
                angle = 0.5;
            }
            else if (angle < -0.5) {
                angle = -0.5;
            }
            const saturation = 0.8 - (0.5 - Math.abs(angle)) * 6;
            const rgb = hslToRgb(25, 1, 1 - (saturation > 0 ? saturation : 0) / 2);
            light.color.setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255);
            if (angle < 0.4 && angle > 0.3) {
                if (!clouds.visible) {
                    clouds.show();
                }
            } else {
                if (clouds.visible && !clouds.hiding) {
                    clouds.hide();
                }
            }
            sky.effectController.inclination = angle;
            sky.update();
        }
    });
});


function getChildrenPolys(obj) {
    let count = 0;
    if (obj.geometry && obj.geometry.faces) {
        count += obj.geometry.faces.length;
    }
    if (obj.children) {
        for (let i = 0; i < obj.children.length; i++) {
            count += getChildrenPolys(obj.children[i]);
        }
    }
    return count;
}


function hslToRgb(hue, saturation, lightness) {
    // based on algorithm from http://en.wikipedia.org/wiki/HSL_and_HSV#Converting_to_RGB
    if (hue == undefined) {
        return [0, 0, 0];
    }

    var chroma = (1 - Math.abs((2 * lightness) - 1)) * saturation;
    var huePrime = hue / 60;
    var secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1));

    huePrime = Math.floor(huePrime);
    var red;
    var green;
    var blue;

    if (huePrime === 0) {
        red = chroma;
        green = secondComponent;
        blue = 0;
    } else if (huePrime === 1) {
        red = secondComponent;
        green = chroma;
        blue = 0;
    } else if (huePrime === 2) {
        red = 0;
        green = chroma;
        blue = secondComponent;
    } else if (huePrime === 3) {
        red = 0;
        green = secondComponent;
        blue = chroma;
    } else if (huePrime === 4) {
        red = secondComponent;
        green = 0;
        blue = chroma;
    } else if (huePrime === 5) {
        red = chroma;
        green = 0;
        blue = secondComponent;
    }

    var lightnessAdjustment = lightness - (chroma / 2);
    red += lightnessAdjustment;
    green += lightnessAdjustment;
    blue += lightnessAdjustment;

    return [Math.round(red * 255), Math.round(green * 255), Math.round(blue * 255)];
}