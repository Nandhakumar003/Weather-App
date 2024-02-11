const WeatherCard = ({
  temp,
  weathertext,
  city,
  country,
  humidity,
  windspeed,
  lat,
  lon,
}) => {
  return (
    <div className="row">
      <h2>{temp} &deg;C</h2>
      <p>{weathertext}</p>
      <h4>
        {city},{country}
      </h4>
      <div className="d-md-flex justify-content-between">
        <h5>Humidity :{humidity} %</h5>
        <h5>Wind Speed : {windspeed} Km/h</h5>
      </div>
      <div className="d-md-flex justify-content-between">
        <h5>Latitude :{lat}</h5>
        <h5>Longitude : {lon}</h5>
      </div>
      <button className="btn btn-outline-danger">Show More</button>
    </div>
  );
};

export default WeatherCard;
