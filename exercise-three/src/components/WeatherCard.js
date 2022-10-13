import React from 'react';

function WeatherCard({clouds, city, currentTemp, highTemp, humidity, lowTemp, weatherType, windSpeed}) {
    return (
        <div className="WeatherCard">
            <h2>{city}</h2>
            <p className='current-temp'>{currentTemp}°</p>
            <p className='weather-type'>{weatherType}</p>
            <div className="top-row">
                <div className="name-value-pair">
                    <p>High:</p>
                    <p>{highTemp}°</p>
                </div>
                <div className="name-value-pair">
                    <p>Low: </p>
                    <p>{lowTemp}°</p>
                </div>
            </div>
            <div className="bottom-row">
                <div className="name-value-pair">
                    <p>Humidity: </p>
                    <p>{humidity}% </p>
                </div>
                <div className="name-value-pair">
                    <p>Cloudiness: </p>
                    <p>{clouds}% </p>
                </div>
                <div className="name-value-pair">
                    <p>Wind: </p>
                    <p>{windSpeed} </p>
                </div>
            </div>         
        </div>
    );
}

export default WeatherCard;