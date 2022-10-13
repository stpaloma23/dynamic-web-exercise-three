import axios from "axios";
import React, { useEffect, useState, useMemo } from "react";
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import { useSearchParams } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import Header from "../components/Header";

function Home() {
    const [weatherData, setWeatherData] = useState({});
    // cities: seul, chicago, orlando, bogota, Johannesburg
    //react router query params 
    const [searchParams] = useSearchParams();
    console.log("searchParams", searchParams.get('city'));
    // default is orlando, if a setcity is initialized in use effect then the city will be set to that value instead 
    const [city, setCity] = useState("Orlando");

    useEffect(() => {
        const cityToQuery = searchParams.get('city') || city;
        setCity(cityToQuery);
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}`)
            .then( function (response) {
                console.log(response)
                setWeatherData(response.data);
            })
            .catch(function(error){
                console.warn(error);
                setWeatherData({});
            });       
    }, []); 

    const { clouds, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed } = useMemo(() => {
        const weatherMain = weatherData.main || {};
        const weatherClouds = weatherData.clouds || {};
        return {
            // city: weatherData.name,
            clouds: weatherClouds.all,
            currentTemp: Math.round(weatherMain.temp),
            highTemp: Math.round(weatherMain.temp_max),
            humidity: weatherMain.humidity,
            lowTemp: Math.round(weatherMain.temp_min),
            weatherType: weatherData.weather && weatherData.weather[0].main,
            windSpeed:weatherData.wind && weatherData.wind.speed,
        };
    }, [weatherData]);
    return (
        <div>
            <Header />
            <WeatherCard 
                clouds={clouds}
                city={city} 
                currentTemp={currentTemp}
                highTemp={highTemp}
                humidity={humidity} 
                lowTemp={lowTemp}
                weatherType={weatherType}
                windSpeed={windSpeed}
            />
        </div>
    );
}

export default Home;