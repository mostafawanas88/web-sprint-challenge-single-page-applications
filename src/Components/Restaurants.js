import React from "react";
import { useHistory } from "react-router-dom";

const Restaurants = (props) => {
    const history = useHistory();
    return (
        <>
        <div className="home-wrapper">
            <img
            className="home-image" 
            src="https://i.pinimg.com/originals/c5/46/d3/c546d3b6a575cebf2799643b61706f3c.png"
            alt="Home Image"
            />
            <button className="pizza-button" onClick={() => history.push("/pizza")}>Craving Pizza??</button>
        </div>
        <div className="rest-list-wrapper">
        {
          props.restaurantsD.map(restaurant => {
            return (
              <div className="rest-card">
                  <img
                    className="rest-list-image" 
                    src={restaurant.logo} 
                    alt={restaurant.name}/>
                  <h2>{restaurant.name}</h2>
                  <p>{restaurant.location}, <span> Expected Delivery time: {restaurant.time}</span></p>
                  <p>Food: {restaurant.food}</p>
                  <p>Average Price: {restaurant.price}</p>
              </div>
            )})
        }
        </div>
    </>
    )
}

export default Restaurants;