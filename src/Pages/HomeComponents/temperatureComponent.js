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
          <p>Temperature</p>
          <p>{Math.floor(city.Temp) + " °C" || ""}</p>
        </div>
        <div>
          <p>Humidity</p>
          <p>{city.Humidity + " RH" || ""}</p>
        </div>
        <div>
          <p>Pressure</p>
          <p>{city.Pressure + " mB"}</p>
        </div>
        <div>
          <p>Feels Like</p>
          <p>{Math.floor(city.FeelsLike) + " °C" || ""}</p>
        </div>
        <div>
          <p>Wind speed</p>
          <p>{city.Wind + " km/h" || ""}</p>
        </div>
        <div>
          <p>Weather</p>
          <p>{city.Weather || ""}</p>
        </div>
      </div>
    </div>
  );
};
