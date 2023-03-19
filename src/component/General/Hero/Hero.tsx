import React from "react";
import "./Hero.css"
import { useState } from "react";

const Hero: React.FC = ()=> {
    const [opacity, setOpacity] = useState(1);
    const handleClick = () => {
        setOpacity(opacity === 1 ? 0.4 : 1);
      };

    return (
        <div id="hero-container">
                <div id="hero-search">
                    <p id="hero-search-text">Epicure works with the top chef restaurants in Tel Aviv</p> 
                    <div id="hero-search-input">
                        <input type="text" placeholder="Search for restaurant cuisine, chef" id="hero-input-text" style={{ opacity }} onClick={handleClick}/>
                    </div>

                </div>            
        </div>
    ) 
}

export default Hero;

