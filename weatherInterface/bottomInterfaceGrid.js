import * as R from 'rodin/core';
// import {WeatherIconNow} from './WeatherIconNow.js';
import {WeatherByHour} from './WeatherByHour.js';

const mainURL = 'img/Weather icons/';
const url64 = mainURL + '64/';

// const icons = {
//     cloudy: 'Cloudy.png',
//     lightning: 'Lightning.png',
//     partly_sunny: 'Partly_sunny.png',
//     rainy: 'Rainy.png',
//     snowing: 'Snowing.png',
//     sunny: 'Sunny.png'
// };
//
// const mainURL = 'img/Weather icons/';
// const url64 = mainURL + '64/';
//
// let time = (str)=>{
//     let t = parseInt(str);
//     if (str[str.length-1] === 'p') t+=12;
//     return t;
// };

export class bottomInterfaceGrid extends R.Sculpt {
    constructor(numberOfView, thumbObjWidth, thumbObjHeight, weatherInfo) {
        super();
        this.itemsNumber = weatherInfo.length;
        this.numberOfView = numberOfView;
        this.thumbObjWidth = thumbObjWidth;
        this.thumbObjHeight = thumbObjHeight;

        this.items = [];
        this.view = new R.HorizontalGrid(this.numberOfView, 1, this.thumbObjHeight, this.thumbObjWidth + this.thumbObjWidth * 0.1);

        this.view.sculpt._threeObject.renderOrder = 4;
        this.add(this.view.sculpt);

        this.view.onShow((elem, index) => {
            if (elem.wasHidden) {
                elem.position.set(0, 0, 0.01);
            }
            elem.wasHidden = false;
            elem.visible = true;
        });

        this.view.onHide((elem, index) => {
            elem.parent = null;
            elem.visible = false;
            elem.wasHidden = true;

            elem.position.set(0, 0, 0.01);
        });

        /* const hoverAnimation = new RODIN.AnimationClip("hoverAnim", {
             _threeObject: {
                 material: {
                     opacity: {to: 0.5, from: 0.0}
                 }
             }
         });
         hoverAnimation.duration(200);

         const hoverOutAnimation = new RODIN.AnimationClip("hoverOutAnim", {
             _threeObject: {
                 material: {
                     opacity: {from: 0.5, to: 0.0}
                 }
             }
         });
         hoverOutAnimation.duration(200);

         const sliderMaterial = new THREE.MeshBasicMaterial({
             transparent: true,
             opacity: 0,
         });
         const goLeft = new RODIN.Plane(this.thumbObjHeight / 4, this.thumbObjHeight, sliderMaterial);
         const goRight = new RODIN.Plane(this.thumbObjHeight / 4, this.thumbObjHeight, sliderMaterial);
         goLeft.animation.add(hoverAnimation, hoverOutAnimation);
         goRight.animation.add(hoverAnimation, hoverOutAnimation);
         goRight.rotation.z = Math.PI;
         goLeft.position.x = -(this.numberOfView / 2 * (this.thumbObjWidth + .03) + goLeft.width / 2 + .05);
         goRight.position.x = this.numberOfView / 2 * (this.thumbObjWidth + .03) + goLeft.width / 2 + .05;
         goLeft.position.z = -.005;
         goRight.position.z = -.005;
         this.add(goLeft);
         this.add(goRight);

         // btn up and down
         goLeft.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, (e) => {
             //if (e.button.keyCode === RODIN.CONST.MOUSE_RIGHT) return;
             if (e.button.keyCode === RODIN.CONST.VIVE_RIGHT_TOUCHPAD) return;
             if (e.button.keyCode === RODIN.CONST.OCULUS_TOUCH_RIGHT_THUMBSTICK) return;
             this.view.scroll(-1);
             e.target._threeObject.material.opacity = 0.85;
         });
         goRight.on(RODIN.CONST.GAMEPAD_BUTTON_DOWN, (e) => {
             // if (e.button.keyCode === RODIN.CONST.MOUSE_RIGHT) return;
             if (e.button.keyCode === RODIN.CONST.VIVE_RIGHT_TOUCHPAD) return;
             if (e.button.keyCode === RODIN.CONST.OCULUS_TOUCH_RIGHT_THUMBSTICK) return;
             this.view.scroll(1);
             e.target._threeObject.material.opacity = 0.85;
         });
         goLeft.on(RODIN.CONST.GAMEPAD_BUTTON_UP, (e) => {
             //if (e.button.keyCode === RODIN.CONST.MOUSE_RIGHT) return;
             if (e.button.keyCode === RODIN.CONST.VIVE_RIGHT_TOUCHPAD) return;
             if (e.button.keyCode === RODIN.CONST.OCULUS_TOUCH_RIGHT_THUMBSTICK) return;
             e.target._threeObject.material.opacity = 0.75;
         });
         goRight.on(RODIN.CONST.GAMEPAD_BUTTON_UP, (e) => {
             //if (e.button.keyCode === RODIN.CONST.MOUSE_RIGHT) return;
             if (e.button.keyCode === RODIN.CONST.VIVE_RIGHT_TOUCHPAD) return;
             if (e.button.keyCode === RODIN.CONST.OCULUS_TOUCH_RIGHT_THUMBSTICK) return;
             e.target._threeObject.material.opacity = 0.75;
         });

         // btn hover and hover out
         goLeft.on(RODIN.CONST.GAMEPAD_HOVER, (e) => {
             e.target._threeObject.material.opacity = 0.75;
         });
         goRight.on(RODIN.CONST.GAMEPAD_HOVER, (e) => {
             e.target._threeObject.material.opacity = 0.75;
         });
         goLeft.on(RODIN.CONST.GAMEPAD_HOVER_OUT, (e) => {
             e.target._threeObject.material.opacity = 0.5;
         });
         goRight.on(RODIN.CONST.GAMEPAD_HOVER_OUT, (e) => {
             e.target._threeObject.material.opacity = 0.5;
         });

 */
        this.view.setGetElement((index) => {
            if (index < 0)
                return undefined;

            if (index >= this.itemsNumber)
                return undefined;

            if (!this.items[index]) {
                this.items[index] = new WeatherByHour(weatherInfo[index].time, url64 + weatherInfo[index].icon.URL,
                    'Storm', weatherInfo[index].tempF, this.thumbObjWidth - this.thumbObjWidth * 0.3, this.thumbObjHeight);
                this.items[index].wasHidden = true;
            }
            return this.items[index];
        });

    }
}