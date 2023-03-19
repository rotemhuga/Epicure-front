import React from "react";
import "../Week_chef/Week_chef.css"
import CardWeekChef from "../../Card_week_chef/Card_week_chef"
import { IchefsValue, IRootState, IrestaurantsValue} from "../../../interfaces";
import { useSelector } from "react-redux";

 
const Week_chef: React.FC = ()=> {
const chefs = useSelector(
        (state:IRootState) => state.chefs.value
    );  
const restaurants = useSelector(
        (state:IRootState) => state.restaurants.value
    );  
    const items = chefs.map((item:IchefsValue) => {
        const chefRest = item.restaurants
        const choosen =  chefRest!.map((restid:string) => {
            const choosenObj = restaurants.filter((restObj) => restObj.id === restid)[0]
            return choosenObj
        })
        if (item.isChefOfTheWeek === true) { 
            return < CardWeekChef
                class= {item.name}
                srcChef= {require(`../../../assets/images/${item.portrait}.png`)}
                ChefName = {item.name}
                info = {item.info}
                restTitle = {`${item.firstName}'s Restaurants`}
                chefResturants = {choosen} 
                key = {item.id}
            /> 
        } else {
            return null;
        }   
    })
    return (
        <div id="week-chef-container">
            <div id="week-chef-title">CHEF OF THE WEEK:</div>
                {items}
        </div>
    ) 
}

export default Week_chef


