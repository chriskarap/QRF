/**
 * Created by Reinchard on 10/6/2017.
 */
import * as R from 'rodin/core';
import {VPcontrolPanel} from './VPControlPanel.js';


export class VideoPlayerScene {
    constructor (url, title, scene){
        this.url = url;
        this.title = title;
        this.scene = scene;

        let player = new R.MaterialPlayer({
            HD: this.url.HD,
            SD: this.url.SD,
            default: "HD"
        }, false, 25, true);

        let material = new THREE.MeshBasicMaterial({
            map: player.getTexture()
        });

        let sphere = new R.Sculpt(new THREE.Mesh(new THREE.SphereBufferGeometry(90, 720, 4), material));
        sphere.scale.set(1, 1, -1);
        sphere.rotation.y = Math.PI/2;
        this.scene.add(sphere);

        this.scene.preRender(function () {
            player.update(R.Time.delta);
        });

        let controlPanel = new VPcontrolPanel({
            scene: this.scene,
            player : player,
            title: this.title,
            cover: "VP_images/rodin.jpg",
            distance: 2,
            width: 3
        });

        controlPanel.on(R.CONST.READY, (evt) => {
            this.scene.add(evt.target);
            evt.target.position.y = 1.6;
            if(evt.target.coverEl) {
                evt.target.coverEl.rotation.y = -Math.PI/2;
            }
        });

        R.Scene.go(scene);
    }
}