import * as R from 'rodin/core';

export class WeatherByHour extends R.Sculpt {
    constructor(time, icon, description, tempF, /*tempC,*/ width, height) {
        super();

        this.time = time;
        this.description = description;
        this.icon = icon;
        this.tempF = tempF;
        // this.tempC = tempC;

        this.width = width;
        this.height = height;
        this.colorBlue = 0x66b1ee;
        this.colorWhite = 0xFFFFFF;

        const timeText = new R.Text3D({
            text: this.time,
            color: this.colorBlue,
            font: 'fonts/Roboto-Regular.ttf',
            fontSize: 0.02,
        });
        timeText.on(R.CONST.READY, (e) => {
            timeText.center();
            timeText.position.y = this.height / 2 - this.width / 2;
            this.add(timeText);
        });

        const underLine = new R.Plane(this.width, 0.001, new THREE.MeshBasicMaterial({color: this.colorBlue}));
        underLine.position.y = this.height / 4;
        this.add(underLine);

        const weatherIcon = new R.Plane(this.width, new THREE.MeshBasicMaterial({
            transparent: true,
            map: R.Loader.loadTexture(this.icon),
        }));
        weatherIcon.position.y = this.height / 4 - this.width / 2;
        this.add(weatherIcon);

        const descriptionText = new R.Text3D({
            text: this.description,
            color: this.colorWhite,
            font: 'fonts/Roboto-Regular.ttf',
            fontSize: 0.02,
            maxWidth: this.width
        });
        descriptionText.on(R.CONST.READY, (e) => {
            descriptionText.center();
            descriptionText.position.y = -(this.height / 4 - this.width / 2);
            this.add(descriptionText);
        });

        const temperatureText = new R.Text3D({
            text: this.tempF,
            color: this.colorWhite,
            font: 'fonts/Roboto-Regular.ttf',
            fontSize: 0.04,
        });
        temperatureText.on(R.CONST.READY, (e) => {
            temperatureText.center();
            temperatureText.position.y = -(this.height / 2 - this.width / 2);
            this.add(temperatureText);
        });
    }
}