/**
 * Created by Reinchard on 10/6/2017.
 */


import * as R from 'rodin/core';
import {VideoPlayerScene} from './videoPlayerScene.js'

/**
 * a class for thumbnails
 */
export class Thumbnail extends R.Sculpt {
    constructor(params, id) {
        super();
        this.element = null;
        this.params = params;
        this.active = false;
    }
    /**
     * renders our thumbnail
     * @param id
     * @returns {Thumbnail}
     */
    draw(id) {
        this.element = new R.Element({
            name: this.params.name,
            width: 0.4,
            height: 0.35,
            background: {
                image: {url: this.params.thumbnail}
            },
            border: {
                radius: 0.01
            },
            transparent: false
        });
        this.element.id = id;
        this.id = id;

        this.element.on(R.CONST.READY, el => {
            this.add(this.element);
            this.element.container = this;
        });
        this._lastButtonDown = 0;
        this.vpScene = new R.Scene('vpScene');

        this.element.on(R.CONST.GAMEPAD_BUTTON_DOWN, this.onButtonDown.bind(this));
        this.element.on(R.CONST.GAMEPAD_BUTTON_UP, this.onButtonUp.bind(this));
        this.element.on(R.CONST.GAMEPAD_HOVER, this.onElementHover.bind(this));
        this.element.on(R.CONST.GAMEPAD_HOVER_OUT, this.onElementHoverOut.bind(this));
        // this.element.on(R.CONST.GAMEPAD_MOVE, Thumbnail.onButtonMove.bind(this));
        return this;
    }

    onElementHover(e) {
        if (!this.active) {
            Thumbnail.reset(e.target.container.parent);
            Thumbnail.thumbAnimation(e.target, {position: {z: .03, x: .02}}, 'elementShow', 100);
            this.active = true;
        }
    }

    onElementHoverOut(e) {
        // if(!this.description.visible) {
        Thumbnail.reset(e.target.container.parent);
        // }
    }

    static onButtonMove(e) {
        e.stopPropagation();
    }

    /**
     * button down event
     * @param e
     */
    onButtonDown(e) {
        this._lastButtonDown = R.Time.now;
    }


    /**
     * button up event
     * @param e
     */
    onButtonUp(e) {
        if (R.Time.now - this._lastButtonDown > 200)
            return;
        Thumbnail.reset(e.target.container.parent);
        new VideoPlayerScene(this.params.url, this.params.title, this.vpScene);
        this.emit('select', {id: this.element.id})
    }


    /**
     * animation for the thumbnail
     * @param obj
     * @param params
     * @param name
     * @param duration
     */
    static thumbAnimation(obj, params, name, duration) {
        const navigationAnimation = new R.AnimationClip(name, params);
        navigationAnimation.duration(duration);
        obj.animation.add(navigationAnimation);
        obj.animation.start(name);
    }

    /**
     * resets all thumbnail's views to default
     * @param thumbnailContainer
     */
    static reset(thumbnailContainer) {
        if (!thumbnailContainer) return;
        let thumbs;
        if (thumbnailContainer && thumbnailContainer._children) {
            thumbs = thumbnailContainer._children;
        } else {
            thumbs = thumbnailContainer;
        }
        for (let i = 0; i < thumbs.length; i++) {
            const ch = thumbs[i];
            if (!ch.active) {
                continue;
            }
            ch.active = false;
            Thumbnail.thumbAnimation(ch.element, {position: {z: 0, x: 0}}, 'elementHide', 100);
        }

    }
}