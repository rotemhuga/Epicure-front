import React from "react";
import "./Card_all_chef.css"

interface Iprops {
    class?: string,
    srcChef?: string,
    alt?:string,
    ChefName?: string,
    id?:string,
}

const CardAllChef: React.FC<Iprops> = (props:Iprops)=> {
        const handleDeleteChef = async (event:any) => {
        event.preventDefault()
        const clickedChef = event.target.id   
        alert("Are You Share You Want To Delete?")    
        fetch("http://localhost:8000/epicure/chefsPage", {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ chef: clickedChef })
            })
            .then(response => response.json())
            .then(data => {
                window.location.reload()
            })
            .catch(error => console.error(error));
          };
    return (
        <div className="chef-card-div">
            <button className={`card-all-chef ${props.class}`} >
                <img src={props.srcChef} alt={props.alt} className="img-all-chef-card"/>  
            </button>
            <button onClick={handleDeleteChef} id={props.class} className="close-button-chef" >X</button>
        </div>
    ) 
}

export default CardAllChef