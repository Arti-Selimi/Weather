import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { News } from "./Pages/News";
import { useState, createContext } from "react";
import Axios from "axios";
import raining from "./weatherIcons/Raining.gif";
import snowing from "./weatherIcons/snowing.gif";
import sunny from "./weatherIcons/Sunny.gif";
import thunder from "./weatherIcons/Thunder.gif";
import AppIcon from "./weatherIcons/AppIcon.png";

export const AppContext = createContext();

function App() {
  const [city, setCity] = useState({
    Name: "",
    Temp: "",
    Humidity: "",
    Pressure: "",
    Weather: "",
    FeelsLike: "",
    Wind: "",
  });

  const retrieveWeather = async (cityParameter) => {
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityParameter.Name}&units=metric&appid=17cbc23e645646cd67cb8feea34b40f0`
    );
    return response.data;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = await retrieveWeather(city);
      console.log(data);
      setCity({
        ...city,
        Temp: data.main.temp,
        Humidity: data.main.humidity,
        Pressure: data.main.pressure,
        Weather: data.weather[0].main,
        FeelsLike: data.main.feels_like,
        Wind: data.wind.speed,
      });
      if (
        data.weather[0].main.includes("Cloud") ||
        data.weather[0].main.includes("Clear")
      ) {
        setImage(sunny);
      } else if (
        data.weather[0].main.includes("Rain") ||
        data.weather[0].main.includes("Haze")
      ) {
        setImage(raining);
      } else if (data.weather[0].main.includes("Snow")) {
        setImage(snowing);
      } else {
        setImage(thunder);
      }
    } catch {
      alert("We do not have " + city.Name + " in our database");
    }
  };

  const [image, setImage] = useState(AppIcon);

  return (
    <AppContext.Provider
      value={{
        city,
        setCity,
        handleSubmit,
        image,
        setImage,
      }}
    >
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/News" element={<News />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
