import * as R from 'rodin/core';

export const resort = new R.Sculpt();

resort.rotation.y = -1.8;
resort.position.y = -5;
const plane = new R.Plane(120,120, new THREE.MeshBasicMaterial({transparent: true, opacity: 0, depthWrite: false}));
R.Scene.add(plane);
plane.position.copy(resort.position);
plane.rotation.x = -Math.PI / 2;
plane.rotation.z = -1.8;

let terrain = new R.Sculpt('./src/models/terrain.obj');
terrain.on(R.CONST.READY, (evt) => {
    const geo = new THREE.Geometry().fromBufferGeometry(evt.target._threeObject.children["0"].geometry);
    terrain = new R.Sculpt(new THREE.Mesh(geo, evt.target._threeObject.children["0"].material)) ;
    resort.add(terrain);
});


plane.on(R.CONST.GAMEPAD_BUTTON_DOWN, (evt) => {
    if (evt.gamepad instanceof R.MouseGamePad) {
        if (evt.keyCode === R.CONST.MOUSE_RIGHT) {
            terrain.doRotate = true;

            evt.stopPropagation();
            navigator.mouseGamePad.stopPropagationOnMouseMove = true;
            plane.initialPos = new THREE.Vector3(evt.point.x, evt.point.y, evt.point.z);
            plane._threeObject.worldToLocal(plane.initialPos);
            resort.initialRot = resort.rotation.clone();
        }
    }
});

plane.on(R.CONST.GAMEPAD_BUTTON_UP, (evt) => {
    terrain.doRotate = false;
});
R.Scene.active.on(R.CONST.GAMEPAD_BUTTON_UP, (evt) => {
    evt.stopPropagation();
    navigator.mouseGamePad.stopPropagationOnMouseMove = false;
    terrain.doRotate = false;
});

plane.on(R.CONST.GAMEPAD_MOVE, (evt) => {
    if ((terrain.doRotate ) && plane.initialPos) {
        const initialAngle = resort.getAngle(plane.initialPos, "y", "x");
        const currPoint = new THREE.Vector3(evt.point.x, evt.point.y, evt.point.z);
        plane._threeObject.worldToLocal(currPoint);
        const currAngle = resort.getAngle(currPoint, "y", "x");
        resort.rotation.y = resort.initialRot.y - (currAngle - initialAngle);
    }
});
resort.getAngle = function (dir, axis1, axis2) {
    let angle = Math.atan(dir[axis1] / dir[axis2]);
    if (dir[axis2] > 0) {
        if (dir[axis1] > 0) {
            angle = -Math.PI + angle
        } else {
            angle = Math.PI + angle
        }
    }
    return angle;
};

// function mergeModel(obj, materialIndex = 0) {
//     let finalGeo =new THREE.Geometry();
//     for (let i = 0; i < obj.children.length; i++) {
//         finalGeo.merge(new THREE.Geometry().fromBufferGeometry(obj.children[""+i].geometry));
//     }
//     return new THREE.Mesh(finalGeo, obj.children[""+materialIndex].material);
// }


