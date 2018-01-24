/**
 * Created by Reinchard on 10/16/2017.
 */
import * as R from 'rodin/core';

/**
 * our grid view
 * @type {null}
 */
let view = null;

/**
 * function for changing grid's layout
 * @param thumbs
 */
export const setView = (thumbs, scene) => {
    /**
     * a variable for keeping our postion when changing the view
     * @type {null}
     */
    let lastCenter = null;

    /**
     * remove the old view before creating a new one
     */
    if (view && view.sculpt) {
        R.Scene.remove(view.sculpt);
        view.sculpt = null;
        lastCenter = view.center;
    }
    view = null;
    view = new R.VerticalGrid(1, 3, 0.5, 0.4);
    view.sculpt.position.set(0, -0.02, .01);

    view.on(R.CONST.SCROLL_START, (evt) => {
        evt.stopPropagation();

    });

    view.on(R.CONST.SCROLL_END, (evt) => {
        evt.stopPropagation();
    });

    view.sculpt.on(R.CONST.GAMEPAD_BUTTON_DOWN, (evt) => {
        evt.stopPropagation();
    });

    // events for our view
    view.onShow((elem, index, alpha) => {
        elem.visible = true;
    });

    view.onHide((elem, index, alpha) => {
        elem.parent = null;
        // boxes[index] = null;
        elem.position.set(0, 0, -5);
        elem.visible = false;
    });

    view.setGetElement((index) => {
        if (index < 0)
            return;

        if (index >= thumbs.length)
            return;

        if (!thumbs[index].element) {
            thumbs[index].draw(index);
            thumbs[index].position.set(0, 0, -5);
        }
        if(thumbs[view.start] && thumbs[view.start].dot) {

            if(view._center > view._oldCenter) {
                thumbs[view.start].dot.isActive = true;
                thumbs[view.start].dot.activeColor = '0x66b1ee';
                if(thumbs[view.start -1]) {
                    thumbs[view.start -1].dot.isActive = false;
                    thumbs[view.start -1].dot.activeColor = '0x3a4650';
                }
            } else {
                thumbs[view.start].dot.isActive = true;
                thumbs[view.start].dot.activeColor = '0x66b1ee';
                thumbs[view.start +1].dot.isActive = false;
                thumbs[view.start +1].dot.activeColor = '0x3a4650';
            }
        }


        return thumbs[index];
    });

    /**
     * restore the old position
     */
    if (lastCenter)
        view.center = lastCenter;

    /**
     * add the view to the scene
     */
    scene.add(view.sculpt);

};