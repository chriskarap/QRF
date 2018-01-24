import * as R from 'rodin/core';
import {weatherInfo} from './weatherInfo.js';
const data = weatherInfo;

const points = [];

export class Timeline extends R.Sculpt {
    constructor(radius, width, start, length) {
        super(new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 256, 1, true, start, length), new THREE.MeshBasicMaterial({
            transparent: true,
            opacity: 0.3,
            //wireframe: true,
            side: THREE.BackSide,
            map: R.Loader.loadTexture("./img/bullet_.png")
        })));

        const fadeinAnim = new R.AnimationClip("fadeinAnim", {
            material: {
                opacity: {from: 0.3, to: 1.0}
            }
        });
        fadeinAnim.duration(200);
        this.animation.add(fadeinAnim);

        const fadeoutAnim = new R.AnimationClip("fadeoutAnim", {
            material: {
                opacity: {from: 1, to: 0.3}
            }
        });
        fadeoutAnim.duration(200);
        this.animation.add(fadeoutAnim);
    }

    init(sky, resort){

        this.material.map.wrapS = this.material.map.wrapT = THREE.RepeatWrapping;
        this.material.map.repeat.set(14, 1);

        this.on(R.CONST.GAMEPAD_HOVER, (e) => {
            if (!resort.hoverred) {
                if (this.animation.isPlaying("fadeoutAnim")) {
                    this.animation.stop("fadeoutAnim");
                }
                this.animation.start('fadeinAnim');
                sky.constUpdate = true;
                if (sky.animation.isPlaying("fadeinSunAnim")) {
                    sky.animation.stop("fadeinSunAnim");
                }
                sky.animation.start('fadeoutSunAnim');
            }
        });

        this.on(R.CONST.GAMEPAD_HOVER_OUT, (e) => {

            if (!resort.hoverred) {
                if (this.animation.isPlaying("fadeinAnim")) {
                    this.animation.stop("fadeinAnim")
                }
                this.animation.start('fadeoutAnim');
                sky.constUpdate = true;
                if (sky.animation.isPlaying("fadeoutSunAnim")) {
                    sky.animation.stop("fadeoutSunAnim")
                }
                sky.animation.start('fadeinSunAnim');
            }
        });

        this.on(R.CONST.GAMEPAD_BUTTON_DOWN, (e) => {
            sky.engaged = true;
            sky.engagedAngle = resort.getAngle(e.point, "x", "y");
            if (sky.engagedAngle < 0) {
                sky.engagedAngle += 2 * Math.PI
            }
            sky.engagedInclination = sky.effectController.inclination;
            navigator.mouseGamePad.stopPropagationOnMouseMove = true;
            //console.log(e.point)

        });
        this.on(R.CONST.GAMEPAD_BUTTON_UP, (e) => {
            //console.log(sky.effectController.inclination);
            //console.log(e.point)
        });
        for(let i = 0; i <data.length; i++){
            const pivot = new R.Sculpt();
            this.add(pivot);
            points[i] = new R.Sphere(2, new THREE.MeshBasicMaterial({wireframe:true}));
            //{time: 7, tempF: "30°", clouds: 0, rain: 0, snow: 0}

            const time = new R.Text3D(
                {
                    text: data[i].time+"",
                    font: "./fonts/Product_sans_regular.json",
                    fontSize: 1.5,
                    lineHeight: 1.5,
                    align: "center",
                    material: new THREE.MeshBasicMaterial({color:0xffffff})
                }
            );

            const temp = new R.Text3D(
                {
                    text: data[i].tempF,
                    font: "./fonts/Product_sans_bold.json",
                    fontSize: 2,
                    lineHeight: 2,
                    align: "center",
                    material: new THREE.MeshBasicMaterial({color:0xffffff})
                }
            );

            const timeTemp = new R.Sculpt();
            points[i] = new R.Sculpt();
            points[i].add(timeTemp);
            timeTemp.add(time);
            timeTemp.add(temp);

            pivot.add(points[i]);
            points[i].position.z = -67;
            pivot.rotation.y =-(i-1) *((5*Math.PI/4)/14)-0.025;
            time.on(R.CONST.READY, (e) => {
                timeTemp.parent = R.Scene.active;
                timeTemp.rotation.set(0,0,0);
            });
            temp.on(R.CONST.READY, (e) => {
                e.target.position.y = -4;
                timeTemp.parent = R.Scene.active;
                timeTemp.rotation.set(0,0,0);
            });
        }

    }
}



