import * as R from 'rodin/core';

const mainURL = 'img/Weather icons/';
const url256 = mainURL + '256/';

let hour = new Date().toString().slice(16, 18);

export class infoInterface extends R.Sculpt {
    constructor(height, weatherInfo) {
        super();

        this.weatherInfo = weatherInfo;
        this.hour = hour;
        this.item = this.currentItem();

        this.weatherIcon = new R.Plane(0.3, new THREE.MeshBasicMaterial({
            transparent: true,
            map: R.Loader.loadTexture(url256 + this.weatherInfo[this.item ].icon.URL),
        }));
        this.weatherIcon.position.set(0, height / 3 - 0.15, 0.01);
        this.add(this.weatherIcon);

        this.temp = new R.Text3D({
            text: this.weatherInfo[this.item ].tempF,
            color: 0xFFFFFF,
            font: '../fonts/Roboto-Regular.ttf',
            fontSize: 0.1
        });
        this.temp.on(R.CONST.READY, ()=>{
            this.temp.center();
            this.temp.position.set(0, height / 3 - 0.15, 0.02);
            this.add(this.temp);
        });


        setInterval(() => {
            hour = new Date().toString().slice(16, 18);
            if (this.hour !== hour) {
                this.hour = hour;
                this.item = this.currentItem();

                this.weatherIcon._threeObject.material.dispose();
                this.weatherIcon._threeObject.material = new THREE.MeshBasicMaterial({
                    transparent: true,
                    map: R.Loader.loadTexture(url256 + this.weatherInfo[this.item].icon.URL),
                });

                this.temp._threeObject.geometry.dispose();
            }
        }, 1000);
    }

    currentItem() {
        let currentItem;
        (+this.hour - 6) >= 0 ? currentItem = (+this.hour - 6) : currentItem = (+this.hour + 18);
        console.log(+this.hour);
        console.log(this.weatherInfo[currentItem].icon.URL);
        return currentItem;
    }
}