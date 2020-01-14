import React from "react";
import storm from "./img/weather-icons/storm.svg";
export default function Current(props) {
  return (
    <>
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
    </>
  );
}
