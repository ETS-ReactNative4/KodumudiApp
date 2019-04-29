import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import HomeHeader from "./components/HomeHeader";
import Icons from "./components/HomeBlocks";
import SimpleBottomNavigation from "./components/bottomNav";
import ProfileCard from "./layouts/ProfileCard";
import * as serviceWorker from "./serviceWorker";
ReactDOM.render(<HomeHeader />, document.getElementById("HomeHeader"));
ReactDOM.render(<Icons />, document.getElementById("HomeBlocks"));
ReactDOM.render(
  <SimpleBottomNavigation />,
  document.getElementById("BottomNav")
);
ReactDOM.render(<ProfileCard />, document.getElementById("ProfileCard"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
