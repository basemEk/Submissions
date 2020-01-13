import React, { Component } from "react";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <input
            type="search"
            id="searchBar"
            placeholder="Type in a city name"
          />
          <button>FIND WEATRHER</button>
        </header>
        <div id="srcImage">
          <div className="app">
            <header className="app__header"></header>
            <main className="app__main"></main>
          </div>
          <img src="../src/img/weather-icons/clear.svg" id="srcImagew" />
          <br />
          <p id="overcastCloud">overcast clouds</p>
          <br />
          <span class="temprature">
            <b>Temprature</b>
          </span>
          <span>10&deg; to 11&#8451;</span>
          <br />
          <br />
          <br />
          <p id="HumidityPressure">
            <b>Humidity</b> 78% <b>Pressure</b> 1008.48
          </p>
        </div>

        <div class="weatherImages">
          <div class="imageResize">
            <p>03:00</p>
            <img src="../src/img/weather-icons/cloudy.svg" />
            <p>8&#8451;</p>
          </div>
          <div class="imageResize">
            <p>06:00</p>
            <img src="../src/img/weather-icons/drizzle.svg" />
            <p>9&#8451;</p>
          </div>
          <div class="imageResize">
            <p>09:00</p>
            <img src="../src/img/weather-icons/fog.svg" />
            <p>14&#8451;</p>
          </div>
          <div class="imageResize">
            <p>12:00</p>
            <img src="../src/img/weather-icons/mostlycloudy.svg" />
            <p>17&#8451;</p>
          </div>
          <div class="imageResize">
            <p>15:00</p>
            <img src="../src/img/weather-icons/partlycloudy.svg" />
            <p>19&#8451;</p>
          </div>
          <div class="imageResize">
            <p>21:00</p>
            <img src="../src/img/weather-icons/rain.svg" />
            <p>13 &#8451;</p>
          </div>
          <div class="imageResize">
            <p>22:00</p>
            <img src="../src/img/weather-icons/snow.svg" />
            <p>14&#8451;</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
