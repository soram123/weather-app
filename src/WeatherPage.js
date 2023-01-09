import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { RollbackOutlined } from '@ant-design/icons'

function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(undefined);
  const { cityName } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (typeof cityName !== "undefined" && cityName !== null) {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/current.json",
        params: { q: cityName },
        headers: {
          "X-RapidAPI-Key":
            "f9b8f2034cmshb80b214ebe70b8bp1f83bdjsnc65527c6673b",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
        }
      };
      axios.request(options).then((response) => {
        setWeather(response.data);
      });
    }
  }, [cityName]);
  return (
    <div>
      {!cityName && <h1 style={{color:"darkorange"}}> Find Weather For Your City </h1>}
      {!cityName && (
        <div>
          {" "}
          <input
            type="text"
            value={city}
            placeholder="Enter your city name"
            onChange={(e) => setCity(e.currentTarget.value)}
          />
          <input
            type="button"
            value="Get Realtime Weather"
            onClick={() => {
              const options = {
                method: "GET",
                url: "https://weatherapi-com.p.rapidapi.com/current.json",
                params: { q: city },
                headers: {
                  "X-RapidAPI-Key":
                    "f9b8f2034cmshb80b214ebe70b8bp1f83bdjsnc65527c6673b",
                  "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com"
                }
              };
              axios.request(options).then((response) => {
                setWeather(response.data);
              });
            }}
          />{" "}
        </div>
      )}
      {cityName && <h1> Weather for {cityName} </h1>}
      {typeof weather !== "undefined" && (
        <div>
          <p> Current Temperature: {weather.current.temp_c} Celcius </p>
          <p> Humidity : {weather.current.humidity}% </p>
          <br/>
          <p style={{cursor:"pointer",color:"blue"}} onClick={() => navigate(`/`)}> <RollbackOutlined  /> Home</p>
         
        </div>
      )}
    </div>
  );
}

export default WeatherPage;
