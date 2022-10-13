import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCloud, faSun, faUmbrella, faSnowflake, faBolt} from "@fortawesome/free-solid-svg-icons";

function WeatherIcon({weatherType}) {
    switch (weatherType) {
        case 'Clouds':
            return <FontAwesomeIcon icon={faCloud}/>;
        case 'Clear':
            return <FontAwesomeIcon icon={faSun}/>;
        case 'Rain':
            return <FontAwesomeIcon icon={faUmbrella}/>;
        case 'Snow':
            return <FontAwesomeIcon icon={faSnowflake}/>;
        case "Thunder":
            return <FontAwesomeIcon icon={faBolt}/>;
        default:
            return null;
    }
}
export default WeatherIcon;