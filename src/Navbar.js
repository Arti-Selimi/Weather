import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "./App";
import logo from "./weatherIcons/AppIcon.png";
import dropdownCities from "./cities500.json";

export const Navbar = () => {
  const { city, setCity, handleSubmit } = useContext(AppContext);
  const [options, setOptions] = useState([]);

  const updateOptions = (cityName) => {
    console.log(cityName);
    setOptions(
      dropdownCities.filter((e) => {
        return e.name.toLowerCase().startsWith(cityName);
      })
    );
    console.log(options);
  };

  return (
    <div className="navbar">
      <img
        src={logo}
        style={{ width: "70px", height: "60px", marginTop: "0" }}
      />
      <Link to="/">Home</Link>
      <Link to="/News">News</Link>
      <Link to="/Contact">Contact</Link>
      <form className="submitCity" onSubmit={handleSubmit}>
        <input
          list="worldCities"
          id="inputCity"
          type="text"
          placeholder="Enter city name"
          value={city.Name}
          onChange={(e) => {
            setCity({ ...city, Name: e.target.value });
            updateOptions(e.target.value.toLowerCase());
          }}
        />
        <datalist id="worldCities">
          {options.slice(0, 5).map((option, index) => {
            return (
                <option key={index} value={option.name}></option>
              )
          })}
        </datalist>
        <button type="submit">Get Weather</button>
      </form>
    </div>
  );
};
