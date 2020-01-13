import React, { Component } from "react";
import "./index.css";
import storm from "./img/weather-icons/storm.svg";
import imgFile1 from "./img/weather-icons/clear.svg";
import imgFile2 from "./img/weather-icons/cloudy.svg";
import imageFile3 from "./img/weather-icons/drizzle.svg";
import imageFile4 from "./img/weather-icons/fog.svg";
import imageFile5 from "./img/weather-icons/mostlycloudy.svg";
import imageFile6 from "./img/weather-icons/partlycloudy.svg";
import imageFile7 from "./img/weather-icons/rain.svg";

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
            <main className="app__main"></main>
          </div>
          <img src={storm} id="srcImagew" />
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
            <img src={imageFile7} />
            <p>8&#8451;</p>
          </div>
          <div class="imageResize">
            <p>06:00</p>
            <img src={imageFile6} />
            <p>9&#8451;</p>
          </div>
          <div class="imageResize">
            <p>09:00</p>
            <img src={imageFile5} />
            <p>14&#8451;</p>
          </div>
          <div class="imageResize">
            <p>12:00</p>
            <img src={imageFile4} />
            <p>17&#8451;</p>
          </div>
          <div class="imageResize">
            <p>15:00</p>
            <img src={imageFile3} />
            <p>19&#8451;</p>
          </div>
          <div class="imageResize">
            <p>21:00</p>
            <img src={imgFile2} />
            <p>13 &#8451;</p>
          </div>
          <div class="imageResize">
            <p>22:00</p>
            <img src={imgFile1} />
            <p>14&#8451;</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
