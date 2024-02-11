import { useState, useRef } from "react";
import "../pages/Home.css";
import WeatherCard from "./WeatherCard";

const WeatherByCity = () => {
  let API_KEY = "4b594152268eb2949103f0c7088b58f0";

  const [temp, setTemp] = useState(0);
  const [weathertext, setWeathertext] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [windspeed, setWindspeed] = useState(0);
  const [search, setSearch] = useState("");
  const [icon, setIcon] = useState(null);
  const [load, setLoad] = useState(false);
  const [errorload, setErrorLoad] = useState(null);

  const searchRef = useRef("");

  const fetchWeatherData = async () => {
    console.log("Testing");
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`
    );
    let dataFormat = await data.json();
    console.log(dataFormat);

    if (dataFormat.cod == "200") {
      setTemp(dataFormat.main.temp);
      setWeathertext(dataFormat.weather[0].main);
      setCountry(dataFormat.sys.country);
      setCity(dataFormat.name);
      setHumidity(dataFormat.main.humidity);
      setWindspeed(dataFormat.wind.speed);
      setIcon(dataFormat.weather[0].icon);
      setLoad(true);
      setErrorLoad(null);
    } else {
      console.log(dataFormat.cod);
      setErrorLoad(dataFormat.message);
      setLoad(false);
    }
  };

  const handleClick = (e) => {
    searchRef.current.value = "";
    fetchWeatherData();

    e.preventDefault();
  };
  return (
    <div className="c-desgin">
      <div className="row justify-content-center">
        <div className="col-md-6 col-12">
          <div className="input-group mt-4">
            <input
              className="form-control border-right-0 border"
              type="search"
              id="example-search-input"
              placeholder="Enter the city name"
              onChange={(e) => setSearch(e.target.value)}
              ref={searchRef}
            />
            <span className="input-group-append">
              <button
                className="btn btn-light border-left-0 border"
                type="button"
                onClick={handleClick}
              >
                <i className="bi bi-search btn-light"></i>
              </button>
            </span>
          </div>
        </div>
      </div>

      {load && (
        <div className="row mt-4">
          <div className="col-md-6 col-12">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              className=""
              style={{ width: "20vh" }}
              alt="..."
            />
          </div>
          <div className="col-md-6 col-12">
            <WeatherCard
              temp={temp}
              weathertext={weathertext}
              country={country}
              city={city}
              humidity={humidity}
              windspeed={windspeed}
            />
          </div>
        </div>
      )}
      {errorload && (
        <h4 className="d-flex justify-content-center">{errorload}</h4>
      )}
    </div>
  );
};

export default WeatherByCity;
