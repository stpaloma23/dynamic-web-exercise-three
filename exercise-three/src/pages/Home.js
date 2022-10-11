import axios from "axios";
import React, { useEffect } from "react";
import { WEATHER_APP_API_KEY } from "../API_KEYS";

function Home() {
    const openWeatherURL = ``;
    // const [weatherData, setWeatherDta] = useState({});
    useEffect(() => {
        axios
            .get(openWeatherURL)
            .then( function (response) {
                console.log(response);
            })
            .catch(function(error){
                console.warn(error);
            });
        // display this weather data on our app 
       
    }, []); 
    return (
        <div>
            <h1>Weather App</h1>
            <p>{WEATHER_APP_API_KEY}</p>
        </div>
    );
}

export default Home;