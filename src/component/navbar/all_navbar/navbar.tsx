import React from "react";
import './navbar.css';
import NavButton from "../../General/NavButton_nav/NavButton";
import Navlink_button from "../../General/Navlink_button/Navlink_button"
import SearchNav from "../Search_nav/SearchNav";
import propfileIcon from '../../../assets/icons/profile.svg';
import BagNav from "../Bag_Nav/BagNav";
import logoName from '../../../assets/icons/epicure-logo-name.svg';
import logoIcon from "../../../assets/icons/epicure-logo-icon.svg";
import burgerIcon from "../../../assets/icons/burger-icon.svg"
import {useNavigate} from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    return (
        
        <div id="all-navbar">
            <div className="left-nav navbar">
                <div className="left-nav-stay navbar">
                    <NavButton name = "" src={logoIcon} class="logo-icon" onClick={() => navigate("/")} />
                </div>
                <div className="left-nav-hidden navbar">
                    <NavButton name = "" src={logoName} class="logo-name" onClick={() => navigate("/")} />
                    <Navlink_button name={"Restaurants"} navigate="/RestaurantsPage" />
                    <Navlink_button name={"chefs"} navigate="/ChefsPage" />
                </div>
            </div>
            <div className="nav-bar-sides">
                <button className="burger-icon">
                    <img src={burgerIcon} alt="burgr-icon" />
                </button>
                <div className="right-nav navbar">
                    <SearchNav />
                    <NavButton name = "" src={propfileIcon} class="logo-name" onClick={() => navigate("/SignIn")} />
                    <BagNav />
                </div>
            </div>
        </div>
    );
};

export default Navbar 

