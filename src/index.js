import React from "react";
import ReactDOM from "react-dom";

import "./css/index.css";
import HomeHeader from "./components/HomeHeader";
import Icons from "./components/HomeBlocks";
import SimpleBottomNavigation from "./components/bottomNav";
import * as serviceWorker from "./serviceWorker";
import { OpenWeatherMap } from 'react-weather';

ReactDOM.render(
  <OpenWeatherMap city="Jerusalem" country="IL" appid="e6d55b295f9d95fb3e4963cc11d4310b" />,
  document.getElementById('Weather')
)

ReactDOM.render(<HomeHeader />, document.getElementById("HomeHeader"));
ReactDOM.render(<Icons />, document.getElementById("HomeBlocks"));
ReactDOM.render(
  <SimpleBottomNavigation />,
  document.getElementById("BottomNav")
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
