import React from "react";
import { NavLink } from "react-router-dom";

interface Iprops {
    name: string,
    navigate: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> 
}

const Navlink_button: React.FC<Iprops> = (props:Iprops) => {
    return (
        <>
            <NavLink to={props.navigate} className={({isActive} ) => isActive ? "button button-active" : "button button-not-active" }>
                    {props.name} 
            </NavLink>
        </>
    )
}

export default Navlink_button
