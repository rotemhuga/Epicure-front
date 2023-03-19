import React from "react";
import "./Rest_filter_link.css"
import { useState } from "react";
import NavButton from "../NavButton_nav/NavButton";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../interfaces";
import {
    restaurantPageFilter
  } from "../../../store/slices/restaurantsSlice"

const RestFilterLink: React.FC = () => {
    const dispatch = useDispatch()
    const restFilter = useSelector((state: IRootState) => state.restaurants.value)
    const [activeButton, setActiveButton] = useState ("all")
    const [clicked, setClicked] = useState("")
    
    const handleAllClick = () => {
        dispatch(restaurantPageFilter("all"));
        setActiveButton("all")
        setClicked("all")
    }
    const handleNewClick = () => {
        dispatch(restaurantPageFilter("new"));
        setActiveButton("new")
        setClicked("new")
    }
    const handleMostPopularClick = () => {
        dispatch(restaurantPageFilter("mostPopular"));
        setActiveButton("mostPopular")
        setClicked("mostPopular")
    }
    const handleOpenNowClick = () => {
        dispatch(restaurantPageFilter("openNow"));
        setActiveButton("openNow")
        setClicked("openNow")
    }
    const handleMapViewClick = () => {
        dispatch(restaurantPageFilter("mapView"));
        setActiveButton("mapView")
        setClicked("mapView")
    }

    return (
        <div className="all-buttons">
            <NavButton name={"All"} class="button-all-rest"  onClick={(handleAllClick)} id={clicked === "all" ? "clicked" : "not-clicked-rest"} />
            <NavButton name={"New"} class="button-new" onClick={(handleNewClick)}  id={clicked === "new" ? "clicked" : "not-clicked"}/>
            <NavButton name={"Most Popular"} class="button-most-popular" onClick={(handleMostPopularClick)} id={clicked === "mostPopular" ? "clicked" : "not-clicked"}/>
            <NavButton name={"Open Now"} class="button-open-now" onClick={(handleOpenNowClick)} id={clicked === "openNow" ? "clicked" : "not-clicked"}/>
            <NavButton name={"Map View"} class="button-map-view" onClick={(handleMapViewClick)} id={clicked === "mapView" ? "clicked-map-view" : "not-clicked-map-view"}/>
        </div>
    )
}

export default RestFilterLink