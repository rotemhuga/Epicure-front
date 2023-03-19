import React from "react";
import "..//Icon_meaning/Icon_meaning.css"
import spicyIcon from "../../../assets/icons/spicy-icon.svg"
import vegitarianIcon from "../../../assets/icons/vegitarian-icon.svg"
import VeganIcon from "../../../assets/icons/vegan-icon.svg"


const Icon_meaning: React.FC = ()=> {

    return (
        <div id="icon_meaning-container">
            <div id="icon_meaning-title">THE MEANING OF OUR ICONS:</div>
            <div id="all-icons">
                <div className="spicy icon-div">
                    <img src={spicyIcon} alt="icon-spicy" className="spicy icon-img" />
                    <p>Spicy</p>
                </div>
                <div className="vegitarian icon-div">
                    <img src={vegitarianIcon} alt="icon-vegitarian" className="vegitarian-icon-img"  />
                    <p>Vegitarian</p>
                </div>
                <div className="vegan icon-div">
                    <img src={VeganIcon} alt="icon-vegan" className="vegan-icon-img" />
                    <p>Vegan</p>
                </div>
            </div>
        </div>
    ) 
}

export default Icon_meaning;
