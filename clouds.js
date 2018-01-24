import * as R from 'rodin/core';

export const clouds = new R.Sculpt('./src/models/clouds.obj');

clouds.hiding = false;
const showAnim = new R.AnimationClip("showAnim", {
    position: {
        y: {from: -2, to: 2.5}
    },
    scale: {
        x: {from: 1, to: 20},
        y: {from: 1, to: 20},
        z: {from: 1, to: 20}
    }
});
showAnim.duration(1000);
showAnim.easing( R.AnimationClip.EASING.Back.Out);
clouds.animation.add(showAnim);

const  hideAnim = new R.AnimationClip("hideAnim", {
    scale: {
        x: {from: 20, to: 0.1},
        y: {from: 20, to: 0.1},
        z: {from: 20, to: 0.1}
    }
});
hideAnim.duration(700);
hideAnim.easing( R.AnimationClip.EASING.Back.In);
clouds.animation.add(hideAnim);

clouds.show = function() {
    clouds.visible = true;
    clouds.hiding = false;
    clouds.animation.start("showAnim");
    console.log("show");
};
clouds.hide = function() {
    clouds.animation.start("hideAnim");
    clouds.hiding = true;
    console.log("hide");
};
clouds.on(R.CONST.ANIMATION_COMPLETE, (e) => {
    if (e.animation === 'hideAnim') {
        clouds.visible = false;
        clouds.hiding = false;
        clouds.scale.set(20,20,20);
    }
});