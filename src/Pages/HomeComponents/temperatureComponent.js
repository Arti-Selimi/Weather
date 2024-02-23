import { AppContext } from "../../App";
import { useContext } from "react";
import raining from "../../weatherIcons/Raining.gif"
import snowing from "../../weatherIcons/snowing.gif"
import sunny from "../../weatherIcons/Sunny.gif"
import thunder from "../../weatherIcons/Thunder.gif"
import AppIcon from "../../weatherIcons/AppIcon.png"

export const Temp = () => {
  const { city, image } = useContext(AppContext);

  return (
    <div className="main">
      <div className="temperature" style={ {backgroundImage: `url("${image}")`} }>
      { image === AppIcon ? <h1>Input your city</h1> : ""}
      </div>
      <div className="extraInfo" style={ image === AppIcon ? {display: "none"}: {display: "grid"}}>
        <div>
          <p>{Math.floor(city.Temp) + " °C" || ""}</p>
          <p></p>
        </div>
        <div>
          <p>{city.Humidity + " RH" || ""}</p>
          <p></p>
        </div>
        <div>
          <p>{city.Pressure + " mB"}</p>
          <p></p>
        </div>
        <div>
          <p>{Math.floor(city.FeelsLike) + " °C" || ""}</p>
          <p></p>
        </div>
        <div>
          <p>{city.Wind + " km/h" || ""}</p>
          <p></p>
        </div>
        <div>
          <p>{city.Weather +  "" || ""}</p>
          <p></p>
        </div>
      </div>
      <div className="otherDays"></div>
    </div>
  );
};
