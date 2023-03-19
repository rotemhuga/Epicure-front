import React from "react";
import "./HomePage.css"
import Navbar from "../navbar/all_navbar/navbar";
import Hero from "../General/Hero/Hero";
import Icon_meaning from "../General/Icon_meaning/Icon_meaning";
import Week_chef from "../General/Week_chef/Week_chef";
import About_us from "../General/About_us/About_us";
import Footer from "../General/Footer/Footer";
import Popular_restaurant from "../General/Popular_restaurant/Popular_restaurant";
import Signature_dish from "../Signature_dish/Signature_dish";

const HomePage: React.FC = () => {
    return (
        <div id="Home-page"> 
            <Navbar />
            <Hero />
            <Popular_restaurant />
            <Signature_dish />
            <Icon_meaning />
            <Week_chef />
            <About_us />
            <Footer />
        </div>
    );
};

export default HomePage 