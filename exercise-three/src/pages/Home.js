import axios from "axios";
import React, { useEffect, useState } from "react";
import { WEATHER_APP_API_KEY } from "../API_KEYS";

function Home() {
    const openWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=Orlando&appid=${WEATHER_APP_API_KEY}`;
    const [weatherData, setWeatherData] = useState({});
    useEffect(() => {
        axios
            .get(openWeatherURL)
            .then( function (response) {
                setWeatherData(response.data);
            })
            .catch(function(error){
                console.warn(error);
                setWeatherData({});
            });
        // display this weather data on our app 
       
    }, []); 
    console.log("state value", weatherData);
    return (
        <div>
            <h1>Weather App</h1>
            <h2>{weatherData.name}</h2>
            <p>Humidity: {weatherData.main && weatherData.main.humidity} </p>
        </div>
    );
}

export default Home;