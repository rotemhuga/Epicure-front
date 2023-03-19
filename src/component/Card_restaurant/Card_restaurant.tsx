import React from "react";
import "./Card_restaurant.css"
import { useNavigate } from "react-router-dom";

interface Iprops {
    class?: string,
    id?:string
    src?: string,
    alt?:string,
    restaurantName?: string,
    chef?:string,
    rating?:string,
    onClick?: any,
    isOpen?: string,
}

const CardRestaurant:React.FC<Iprops>  = (props:Iprops)=> {
const navigate = useNavigate()

const handleDeleteRest = async (event:any) => {
    event.preventDefault()
    const clickedRestaurant = event.target.id      
    
  fetch("http://localhost:8000/epicure/restaurantsPage", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ restaurant: clickedRestaurant })
    })
    .then(response => response.json())
    .then(data => {
      window.location.reload()
    })
    .catch(error => console.error(error));

  fetch("http://localhost:8000/epicure/dishesPage", {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ restaurant: clickedRestaurant })
    })
    .then(response => response.json())
    .then(data => {
      window.location.reload()
    })
    .catch(error => console.error(error));
  };

    return (
    <div className="card-rest-div">
        <button className={`card popular-rest all-rest`} id={`rest-card ${props.id}`} onClick={() => {navigate(`/RestaurantsPage/${props.id}`);window.scrollTo(0, 0);}} >
            <img src={props.src} alt={props.alt} className="img-card R-popular R-all"/>
            <div className="name-popular-card">{props.restaurantName} </div>
            <div className="chef-popular-card">{props.chef}</div>
            <div className="rating-popular-div">
                <img src={props.rating} alt="" className="rating-popular-card" />
            </div>
        </button>
        <button onClick={handleDeleteRest} id={props.restaurantName} className="close-button" >X</button>
    </div>
   
    ) 
}

export default CardRestaurant
