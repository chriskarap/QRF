import * as R from 'rodin/core';
import VideoContainer from './VideoContainer/videoContainer.js';
import {WeatherInterface} from './weatherInterface/WeatherInterface.js';

const interfaceSculpt = new R.Sculpt();
let leftInterface = VideoContainer.mainContainer;

interfaceSculpt.add(leftInterface);

const weatherInterface = new WeatherInterface(VideoContainer.height);
weatherInterface.rotation.y = -Math.PI / 6;
weatherInterface.position.set(1.4, 0, -1.2);
interfaceSculpt.add(weatherInterface);

R.Avatar.active.HMDCamera.add(interfaceSculpt);