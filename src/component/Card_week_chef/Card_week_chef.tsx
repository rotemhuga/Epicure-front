import React from "react";
import "./Card_week_chef.css"

interface Iprops {
    class?: string,
    srcChef?: string,
    alt?:string,
    ChefName?: string,
    id?:string,
    info?:string,
    chefResturants: any;
    restTitle?:string
}

const CardWeekChef: React.FC<Iprops> = (props:Iprops)=> {
    return (
        <>
            <div className="week-chef-details">
                <button className={`card-week-chef ${props.class}`} id="all-chefs-card" >
                    <img src={props.srcChef} alt={props.alt} className="img-week-chef-card"/>  
                </button>
            </div>
            <div className="info-week-chef-card">{props.info}</div>
            <div className="rest-title-week-chef-card">{props.restTitle}</div>
            <div className="all-rest-week-chef">
                {
                    props.chefResturants.map((chefRest:any) => (
                        <button className="rest-card">
                            <img src={require(`../../assets/images/Restaurants/${chefRest.img}.png`)} alt={chefRest.name} className="rest-img one"/>  
                            <div className="one-name rest-week">{chefRest.name}</div>
                        </button>
                        )
                    )
                }      
            </div>
        </>
    ) 
}

export default CardWeekChef

