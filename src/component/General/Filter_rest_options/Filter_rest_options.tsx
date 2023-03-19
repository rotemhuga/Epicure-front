import React from "react";
import "../Rest_filter_link/Rest_filter_link.css"
import "../Filter_rest_options/Filter_rest_options.css"
import NavButton from "../NavButton_nav/NavButton";
import vectorDown from "../../../assets/icons/Vector-filter-down.svg"
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

  
const FilterRestOptions: React.FC = () => {
const navigate = useNavigate();
const [modal, setModal] = useState(false);
const [count, setCount] = useState(0);

const toggleModal = () => {
    setModal(!modal);
  };

  const [addRestInputs, setAddRestInputs] = useState({
    id: "",
    img: "",
    name: "",
    chef: "",
    rating: "",
    openHour: "",
    closeHour: "",
    address:"",
    dishes: [-1],
    isPopular:false,
    isNew:false,
    isOpen:false,
    map:false
})

const handleAddRest = async (event:any) => {
  event.preventDefault()
  setAddRestInputs({
    id: "1",
    img: event.target[0].value,
    name: event.target[1].value,
    chef: event.target[2].value,
    rating: event.target[3].value,
    openHour: event.target[8].value,
    closeHour: event.target[9].value,
    address: event.target[10].value,
    dishes: [1,4,6],
    isPopular: true,
    isNew: true,
    isOpen: true,
    map:false
  })
  setCount(prevCount => prevCount + 1);
  window.location.href = "http://localhost:3000/RestaurantsPage";
}

  useEffect(()=> {
    if (count >= 1) {
      fetch("http://localhost:8000/epicure/restaurantsPage", {
        method: 'POST',
        body: JSON.stringify(addRestInputs),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => {
        return response.json();
      }) 
      .then((data) => {
        return data;
      }) 
      .catch((error)=> {
        console.log(error.message);
      });
    }
  }, [addRestInputs, count]);

const allRest = document.getElementById('all-rest-page-container')

  if(modal) {
    document.body.classList.add('active-modal')
    allRest!.style.display = 'none';

  } else {
    document.body.classList.remove('active-modal')
  }
    
    return (
        <>
        <div className="all-buttons filter-options">
            <div className="button-filter left">
                <NavButton name={"Price Range"} class="button-all-rest"/>
                <img src={vectorDown} alt="vector" className="vectorDown" />
            </div>
            <div className="button-filter middle">
                <NavButton name={"Distance"} class="button-all-rest"/>
                <img src={vectorDown} alt="vector" />
            </div>
            <div className="button-filter right">
                <NavButton name={"Rating"} class="button-all-rest"/>
                <img src={vectorDown} alt="vector" />
            </div>        
            <button className="add-restaurant-button" onClick={toggleModal}>
                Add Restaurant
            </button>
        </div>
        {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add New Restaurant</h2>
            <form onSubmit={handleAddRest} >
                <div className="inputs-content" >
                  <div className="img-div">
                  <select id="img-input" name="img">
                  <option value="">Please select an image</option>
                    <option value="claro-1">1</option>
                    <option value="Lumina-2">2</option>
                    <option value="tiger-lily-3">3</option>
                    <option value="onza-4">4</option>
                    <option value="kitchen-market-5">5</option>
                    <option value="mashya-6">6</option>
                    <option value="kab-kem-7">7</option>
                    <option value="messa-8">8</option>
                    <option value="nitan-thai-9">9</option>
                    <option value="ya-pan">10</option>
                  </select>
                  </div>
                  <label><input type="text" name="name" id="" placeholder="Restaurant Name" className="input-add-rest" /></label>                
                  <label><input type="text" name="chefName" id="" placeholder="Chef Name" className="input-add-rest" /></label>                
                  Rating (Scale 1-5):
                  <label><input type="text" name="rating" id="" placeholder="Restaurant Rating" className="input-add-rest" /></label>                
                  <h2>Open Hours:</h2>
                  From:
                  <input type="time" id="appt" name="appt"
                  min="01:00" max="18:00" required/>
                  To:
                  <input type="time" id="appt" name="appt"
                  min="01:00" max="18:00" required/>
                  <label><input type="text" name="chefName" id="" placeholder="Restaurant Address" className="input-add-rest" /></label> 
                  <label><input type="text" name="DishesName" id="" placeholder="Restaurant Dishes" className="input-add-rest" /></label> 
                  Popular Restauarnt:
                  <label><input type="radio" name="isPopular" id="" value="yes" /><span>Yes</span></label>                
                  <label><input type="radio" name="isPopular" id="" value="no"/><span>No</span></label>                
                  New Restauarnt:
                  <label><input type="radio" name="isNew" id="" value="yes" /><span>Yes</span></label>                
                  <label><input type="radio" name="isNew" id="" value="no" /><span>No</span></label>    
                  <button type="submit" id="button-add-rest">Add Restaurant</button>
                </div>
            </form> 
            <button className="close-modal" onClick={toggleModal} >
            X
            </button>
          </div>
        </div>
      )}
        </>
    )
}

export default FilterRestOptions

