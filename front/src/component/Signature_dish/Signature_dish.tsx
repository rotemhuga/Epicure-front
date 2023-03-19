import React from "react";
import "../Signature_dish/Signature_dish.css"
import CardDish from "../../component/Card_dish/Card_dish"
import { IdishesValue, IRootState } from "../../interfaces";
import { useSelector } from "react-redux";

const Signature_dish: React.FC = ()=> {
const dishes = useSelector(
        (state:IRootState) => state.dishes.valueHomeRestDishes
    );

const items = dishes.map((item:IdishesValue) => {
    if (item.isPopular === true) {
        return <CardDish 
            class={item.name}
            name={item.name}
            src={require(`../../assets/images/Dishes/${item.img}.png`)}
            ingredients={item.ingredients}
            price={item.price}
            key={item.id}    
            />
    
    } else {
        return null;
 }   
})
    return (
        
        <div className="all-dish-container">
            <div className="popular-dish-title">SIGNATURE DISH OF</div>
            <div className="all-dish-card">
                {items}
            </div>
            <button className="all-dish-path">
            </button>
        </div>
    ) 
}

export default Signature_dish

