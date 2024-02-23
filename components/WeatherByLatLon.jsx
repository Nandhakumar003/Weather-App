import { useState, useRef, useEffect } from "react";
import "../pages/Home.css";
import WeatherCard from "./WeatherCard";

const WeatherByLatLon = () => {
  let API_KEY = "4b594152268eb2949103f0c7088b58f0";

  const [temp, setTemp] = useState(0);
  const [weathertext, setWeathertext] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [humidity, setHumidity] = useState(0);
  const [windspeed, setWindspeed] = useState(0);
  const [searchlat, setSearchlat] = useState("");
  const [searchlon, setSearchlon] = useState("");
  const [icon, setIcon] = useState(null);
  const [load, setLoad] = useState(false);
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [errorload, setErrorLoad] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        navigator.geolocation.getCurrentPosition(function (position) {
          setSearchlat(position.coords.latitude);
          setSearchlon(position.coords.longitude);
        });

        await fetchWeatherData();
      } catch (err) {
        console.warn(err.message);
        setErrorLoad(err.message);
      }
    };
    fetchData();
  }, []);

  const searchlatRef = useRef("");
  const searchlonRef = useRef("");

  const fetchWeatherData = async () => {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${searchlat}&lon=${searchlon}&appid=${API_KEY}&units=metric`
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
      setLat(dataFormat.coord.lat);
      setLon(dataFormat.coord.lon);
      setLoad(true);
      setErrorLoad(null);
    } else {
      console.log(dataFormat.cod);
      setErrorLoad(dataFormat.message);
      setLoad(false);
    }
  };

  const handleClick = (e) => {
    searchlatRef.current.value = "";
    searchlonRef.current.value = "";
    fetchWeatherData();

    e.preventDefault();
  };

  return (
    <div className="c-desgin">
      <div className="row justify-content-center">
        <div className="col-md-6 col-12">
          <form className="row mt-4">
            <div className="col-md-5">
              <input
                className="form-control border-right-0 border"
                type="search"
                id="example-search-input"
                placeholder="Enter the Lat"
                onChange={(e) => setSearchlat(e.target.value)}
                ref={searchlatRef}
              />
            </div>

            <div className="col-md-5">
              <input
                className="form-control border-right-0 border ms-md-2"
                type="search"
                id="example-search-input"
                placeholder="Enter the Lon"
                onChange={(e) => setSearchlon(e.target.value)}
                ref={searchlonRef}
              />
            </div>

            <div className="col-md-2">
              <span className="input-group-append ms-md-2">
                <button
                  className="btn btn-light border-left-0 border"
                  type="button"
                  onClick={handleClick}
                >
                  <i className="bi bi-search btn-light"></i>
                </button>
              </span>
            </div>
          </form>
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
              lat={lat}
              lon={lon}
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

export default WeatherByLatLon;
