const icons = {
    cloudy: 'Cloudy.png',
    lightning: 'Lightning.png',
    partly_sunny: 'Partly_sunny.png',
    rainy: 'Rainy.png',
    snowing: 'Snowing.png',
    sunny: 'Sunny.png'
};

let time = (str) => {
    let t = parseInt(str);
    if (str[str.length - 1] === 'p') t += 12;
    return t;
};

export class WeatherIconNow {
    constructor(weatherItem) {
        this.weatherItem = weatherItem;

        if (this.weatherItem.rain) {
            if (!this.weatherItem.clouds) this.URL = icons.rainy;
            if (this.weatherItem.clouds) this.URL = icons.lightning;
        } else if (this.weatherItem.snow) {
            this.URL = icons.snowing;
        } else if (!this.weatherItem.snow && !this.weatherItem.rain && (time(this.weatherItem.time) > 6 && time(this.weatherItem.time) < 18)) {
            if (!this.weatherItem.clouds) this.URL = icons.sunny;
            if (this.weatherItem.clouds) this.URL = icons.partly_sunny;
        } else {
            this.URL = icons.cloudy;
        }
    }

    static updateIconURL(hour) {
        // const d = new Date();
        // const monthDayYear = d.toString().slice(4, 15);
        // this.hour = d.toString().slice(16, 18);
        console.log(hour);
        return this.URL;
        // for (let i = 0; i< this.weatherItem.length; i++){
        //     if()
        // }


    }
}

