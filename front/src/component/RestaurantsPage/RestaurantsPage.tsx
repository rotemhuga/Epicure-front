import React from "react";
import "./RestaurantsPage.css"
import Navbar from "../navbar/all_navbar/navbar";
import RestFilterLink from "../General/Rest_filter_link/Rest_filter_link";
import Footer from "../General/Footer/Footer";
import FilterRestOptions from "../General/Filter_rest_options/Filter_rest_options";
import AllRestaurants from "../All_restaurants/All_restaurants";

const RestaurantsPage: React.FC = () => {
    
    return (
        <div id="Restaurants-page">               
            <Navbar />
        <div className="restaurant-title">
            RESTAURANTS
        </div>
            <RestFilterLink />
            <FilterRestOptions />
            <AllRestaurants />
            <Footer />
        </div>
    );
};

export default RestaurantsPage 