import React, { useState } from "react";
import data from "./data"
import "./App.css";
import Restaurants from "./Components/Restaurants"
import PizzaForm from "./Components/PizzaForm"
import { Link, Route, Switch } from "react-router-dom"

const App = () => {
  const [restaurants, setRestaurants] = useState(data);
  const [order, setOrder] = useState([{
        size: "",
        sauce: "",
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        special: ""
  }]);

  const addOrder = (newOrder) => {
    setOrder([...order, newOrder])
  }
  
  return (
    <>
    <nav>
      <h1 className="store-header">Lambda Eats</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
    <Switch>
      <Route path="/pizza">
        <PizzaForm addOrder={addOrder}/>
      </Route>
      <Route path="/">
        <Restaurants restaurantsD={restaurants}/>
      </Route>
    </Switch>
    </>
  );
};
export default App;

// home page that includes logos of restaurants, prices, and orders (similar to assignment for e-commerce webstie)
// home page will have a button that will say "pizza?" (same assignment of Trinkets)
// on the click of this button the user will be directed to a pizza form (the two form assigments)
// on form submission user will need to get confirmation 

// Home Page
  // Logo of our Delivery App  
  // button to take you to pizza form right underneath the logo
  // logos of other restaurants (static)
    // underneath each logo should:
      // name of restaurant 
      // type of food
      // estaimte time for order preparation / delivery
  // Data Required:
    // can have its own state no need to pass through Props
    // list of restaurants to be passed in with names, food type, order arrival
    // button that once clicked routes to form page

// Form page
  // Pizza form
    // circle selection for choice of sauce
    // checkboxes for toppings
    // on/off button for special gluten instruction
    // text area for special instructions
    // button up and down to increase number of pizzas
    // price function that calculates based on output of that number 
    // add to order button that triggers OnSubmit