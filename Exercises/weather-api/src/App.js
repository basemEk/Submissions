import React, { Component } from "react";
import "./index.css";
import storm from "./img/weather-icons/storm.svg";
import Current from "./currentWeather";
import Search from "./Search";
import Weather_images from "./weather_images";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <Search />
        </header>
        <div id="srcImage">
          <div className="app">
            <main className="app__main"></main>
          </div>
          <Current />
        </div>

        <Weather_images />
      </div>
    );
  }
}

export default App;
