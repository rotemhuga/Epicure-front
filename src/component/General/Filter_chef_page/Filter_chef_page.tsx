import React from "react";
import "./Filter_chef_page.css"
import NavButton from "../NavButton_nav/NavButton";
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { IRootState } from "../../../interfaces";
import {
    chefsPageFilter
} from "../../../store/slices/chefsSlice"

const FilterChefPage: React.FC = () => {
    const dispatch = useDispatch ()
    const restFilter = useSelector((state: IRootState) => state.restaurants.value)
    const [activeButton, setActiveButton] = useState("all")
    const [clicked, setClicked] = useState("")

    const handleAllClick = () => {
        dispatch(chefsPageFilter("all"));
        setActiveButton("all")
        setClicked("all")
    }
    const handleNewClick = () => {
        dispatch(chefsPageFilter("new"));
        setActiveButton("new")
        setClicked("new")
    }
    const handleMostViewedClick = () => {
        dispatch(chefsPageFilter("mostViewed"));
        setActiveButton("mostViewed")
        setClicked("mostViewed")
    }

        return (
            <div className="all-buttons">
                <NavButton name={"All"} class="button-all-chefs" onClick={handleAllClick} id= {clicked === "all" ? "clicked": "not-clicked"}/>
                <NavButton name={"New"} class="button-new-chef" onClick={handleNewClick} id= {clicked === "new" ? "clicked": "not-clicked"} />
                <NavButton name={"Most Viewed"} class="button-most-viewed" onClick={handleMostViewedClick} id= {clicked === "mostViewed" ? "clicked": "not-clicked"}/>
            </div>
        )
    }

export default FilterChefPage