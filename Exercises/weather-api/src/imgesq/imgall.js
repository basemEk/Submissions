import React from "react";
import storm from "../img/weather-icons/storm.svg";
import imgFile1 from "../img/weather-icons/clear.svg";
import imgFile2 from "../img/weather-icons/cloudy.svg";
import imageFile3 from "../img/weather-icons/drizzle.svg";
import imageFile4 from "../img/weather-icons/fog.svg";
import imageFile5 from "../img/weather-icons/mostlycloudy.svg";
import imageFile6 from "../img/weather-icons/partlycloudy.svg";
import snow from "../img/weather-icons/snow.svg";

import imageFile7 from "../img/weather-icons/rain.svg";
function checkChange(check){
 if(check<300){

  return <img src={storm}/>
 }
 else if (check>= 300 && check >=499){

  <img src={imageFile3} />
 }
 else if (check>= 500 && check >=599){

  <img src={imageFile7} />
 }
 else if (check>= 600 && check >=699){

  <img src={snow} />
 }
 else if (check == 800){

  <img src={imgFile1} />
 }
 else if (check>= 700 && check >=799){

  <img src={imageFile4} />
 }
 else if (check == 801 ){

  <img src={imageFile6} />
 }
 else if (check>= 801 && check >=805){

  <img src={imageFile5} />
 }
 else {check}


 <img src={imageFile5} />
}



export default function imgw (props){

return (
<>


<div className="weatherImages">
      <div className="imageResize">
       {checkChange(props.all.weather[0].id)}
       <p>03:00</p>
        <img src={imageFile7} />
        <p>8&#8451;</p>
      </div>
     
    </div>

</>
)

}




const imgw = props => {
  return (
    <div className="weatherImages">
      <div className="imageResize">
        
      </div>
     
    </div>
  );
};

export default imgw;
