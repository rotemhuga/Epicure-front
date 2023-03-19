import React from "react";
import bag from '../../../assets/icons/bag.svg';
import "./BagNav.css"

const BagNav: React.FC = () => {
    return (
        <button><img src={bag} alt="bag" /></button>
    )
}

export default BagNav