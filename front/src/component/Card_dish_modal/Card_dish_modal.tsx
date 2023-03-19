import React from "react";
import "./Card_dish_modal.css"
import {Iprops} from "../../interfaces"
import shekel from "../../assets/icons/shekel-icon.svg"
import minusIcon from "../../assets/icons/minus-icon.svg"
import plusIcon from "../../assets/icons/plus-icon.svg"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../interfaces";

const CardDishModal: React.FC<Iprops> = (props:Iprops)=> {
        const dispatch = useDispatch();
        const [Quantity, setQuantity] = useState (1)
        const minQuantity = 1;
        const counter = useSelector((state: IRootState) => state.counter);

    const handlePlusClick = () => {
        setQuantity(Quantity+1)
    }
    const handleMinusClick = () => {
        if (Quantity > minQuantity) {
        setQuantity(Quantity-1)
        }
    }
    return (
        <button className={`modal-dish-card ${props.class}`} onClick={props.onClick} >
            <div className="all-details-dish">
                <div className="up-part-card-dish">
                    <img src={props.src} alt={props.alt} className="img-card-dish-modal"/>
                    <div className="name-card-dish">{props.name} </div>
                    <div className="ingredients-card-dish-modal">
                        {props.ingredients}</div>
                </div>
                <div className="price-div-modal">
                    <hr className="hr-left" />
                    <img src={shekel} alt="" />
                    <div className="price-card-dish">{props.price}</div>
                    <hr className="hr-right"/>
                    <hr className="hr-mobile" />
                </div>
            </div>
            <div className="side-dish-container">
                <div className="title-side-dish"> Choose a side </div>
                <div className="side-dish-content">                    
                    {props.sideDishes}
                </div>
            </div>
            <div className="changes-container">
                <div className="title-changes-dish">Changes</div>
                <div className="changes-content">                    
                {props.changes}
                </div>
            </div>
            <div className="quantity-container">
                <div className="quantity-title">
                    Quantity
                </div>
            <div className="counter-continer">
                <button onClick={handleMinusClick}>
                    <img src={minusIcon} alt="minus-icon" className="minus-button" />
                </button>
                <p>{Quantity}</p>
                <button onClick={handlePlusClick}>
                   <img src={plusIcon} alt="plus-icon" /> 
                </button>
            </div>
            <button className="button-bag-modal">
                ADD TO BAG
            </button>
            </div>
        </button>
    ) 
}

export default CardDishModal