import React from "react";

function Header () {
    return (
        <header>
            <h1 className="weather-app-title">World Weather App</h1>
            <div className="header-links">
                <a href="/?city=Bali">Bali</a>
                <a href="/?city=Cairo">Cairo</a>
                <a href="/?city=Paris">Paris</a>
                <a href="/?city=Johannesburg">Johannesburg</a>
                <a href="/?city=Seattle">Seattle</a>
            </div>
        </header>
    )
}
export default Header