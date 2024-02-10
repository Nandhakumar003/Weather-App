const WeatherCard = ({
  temp,
  weathertext,
  city,
  country,
  humidity,
  windspeed,
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
      <button className="btn btn-primary">Show More</button>
    </div>
  );
};

export default WeatherCard;
