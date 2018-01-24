System.register(['../time/Time'], function (_export, _context) {
    "use strict";

    var Time;
    return {
        setters: [function (_timeTime) {
            Time = _timeTime.Time;
        }],
        execute: function () {

            /**
             * VideoTexture Class
             * @param {string|object} url - the video file url or an object with urls and default url {0: "test1.mp4", 1: "test2.mp4", default: "0"}
             * @param {boolean} [stereoscopic = false] - set true if video is Up&Down stereoscopic
             * @param {number} [fps = 25] - the desired playback frame rate
             * @param {string} [anonymous = false] - if true crossOrigin attrubute is set to 'anonymous' if false, set to 'use-credentials'
             */
            class VideoTexture extends THREE.Texture {
                constructor(url, stereoscopic = false, fps = 25, anonymous = false) {
                    const crossOrigin = anonymous ? 'anonymous' : 'use-credentials';

                    if (typeof url === "string") {
                        url = {
                            0: url,
                            default: "0"
                        };
                    }

                    const video = document.createElement('video');
                    const source = document.createElement("source");
                    const urlSplited = url[url.default].split('.');
                    source.type = "video/" + urlSplited[urlSplited.length - 1];
                    source.src = url[url.default];
                    super(video);
                    this.frames = 0;
                    this.video = video;
                    this.video.appendChild(source);
                    this._playing = false;
                    this._timeupdate = false;

                    this.video.autoplay = false;
                    this.video.muted = false;
                    this.video.loop = false;
                    this.video.preload = "auto";
                    this.video.setAttribute('crossOrigin', crossOrigin);
                    this.video.setAttribute('playsinline', 'playsinline');
                    this.video.setAttribute('webkit-playsinline', 'webkit-playsinline');
                    this.video.load();
                    this.minFilter = this.magFilter = THREE.LinearFilter;
                    this.format = THREE.RGBFormat;
                    this.generateMipmaps = false;
                    this._copyFrame = false;

                    this.video.addEventListener('playing', e => {
                        this._playing = true;
                        checkReady();
                        //console.log("playing");
                    }, true);

                    this.video.addEventListener('timeupdate', e => {
                        this._timeupdate = true;
                        checkReady();
                        //console.log("update");
                    }, true);

                    const checkReady = () => {
                        //console.log(this._playing , this._timeupdate);
                        if (this._playing && this._timeupdate) {
                            this._copyFrame = true;
                        } else {
                            this._copyFrame = false;
                        }
                    };
                    this.play();
                    console.log(this);
                }

                play() {
                    this.video.play();
                }
                pause() {
                    this._playing = false;
                    this.video.pause();
                }

                update() {
                    /*        this.frames++;
                            if (this.video.currentTime >= this.video.duration/10) {
                                alert(this.frames/this.video.currentTime);
                            }*/
                    if (this._copyFrame) {
                        this.needsUpdate = true;
                    }
                }

            }

            _export('VideoTexture', VideoTexture);
        }
    };
});