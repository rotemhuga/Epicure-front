import React from "react";
import "../OneRestPage/OneRestPage.css"
import Navbar from "../navbar/all_navbar/navbar";
import Footer from "../General/Footer/Footer";
import OneRestDetails from "../General/One_rest_details/One_rest_details";

const OneRestPage: React.FC = () => {
        return (
        <div>
            <div><Navbar /></div>
            <div><OneRestDetails /></div>
            <div><Footer /></div>
        </div>
       ) 

    }
export default OneRestPage
