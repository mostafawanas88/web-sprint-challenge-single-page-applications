import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios"


const formSchema = yup.object().shape({
    size: yup.string().required("Size is a required field"),
    sauce: yup.string().required("Must be a valid saud selection"),
    topping1: yup.boolean().oneOf([true], "Please choose topping"),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean(),
    special: yup.string().required("please insert cooking instructions")
})


    const PizzaForm = (props) => {
    const [formState, setFormState] = useState({
        size: "",
        sauce: "",
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        special: "",
    })

    const [errorState, setErrorState] = useState({
        size: "",
        sauce: "",
        topping1: "",
        topping2: "",
        topping3: "",
        topping4: "",
        special: "",
})

const validate = e => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    yup
      .reach(formSchema, e.target.name)
      .validate(value)
      .then(valid => {
        setErrorState({
          ...errorState,
          [e.target.name]: ""
        });
      })
      .catch(err => {
        setErrorState({
          ...errorState,
          [e.target.name]: err.errors[0]
        });
      });
  };

  const inputChange = e => {
    e.persist();
    validate(e);
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post("https://reqres.in/api/users", formState)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return (
        <div className="form-wrapper">
        <h2>Build your own Pizza!!</h2>
        <img className="pizza-logo" src="https://85ideas.com/wp-content/uploads/2015/07/Creative-Pizza-Logo-Designs.png"
        alt="Pizza Logo"
        />
        <h3>Build your own Pizza Selection...</h3>
        <form onSubmit={formSubmit}>
            <label htmlFor="pizza size">
                Select Size:
                <select
                value={formState.size} // need to include formual 
                name="size"
                id="pizza size"
                onChange={inputChange} // need to include formula
                >
                <option value="">--Select Size--</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="family">Family Size</option>
                </select>
            {errorState.size.length > 0 ? (
                <p className="error">{errorState.size}</p> ) : null}
            </label>
            <fieldset htmlFor="sauce">
                <legend> Choice of Sauce: </legend>
                <input 
                type="radio" 
                id="sauce" 
                name="sauce" />
                <label htmlFor="original">Original Sauce</label><br/>
                <input 
                type="radio" 
                id="sauce" 
                name="sauce"/>
                 <label htmlFor="garlic">Garlic Ranch</label><br/>
                 <input 
                 type="radio" 
                 id="sauce" 
                 name="sauce" />
                 <label htmlFor="bbq">BBQ Sauce</label>
                 <input 
                 type="radio" 
                 id="sauce" 
                 name="sauce" />
                 <label htmlFor="spinach">Spinach Alfredo</label>
            </fieldset>
            <label htmlFor="the-toppings">
                Add Toppings:
                <label>
                Pepperoni 
                <input
                type="checkbox"
                id="the-toppings"
                name="topping1"
                checked={formState.toppings}
                onChange={inputChange}
                />
                </label>
                <label>
                Sausage 
                <input
                type="checkbox"
                id="the-toppings"
                name="topping2"
                checked={formState.toppings}
                onChange={inputChange}
                />
                </label>
                <label>
                Mushrooms 
                <input
                type="checkbox"
                id="the-toppings"
                name="topping3"
                checked={formState.toppings}
                onChange={inputChange}
                />
                </label>
                <label>
                Vegetable Mix 
                <input
                type="checkbox"
                id="the-toppings"
                name="topping4"
                checked={formState.toppings}
                onChange={inputChange}
                />
                </label>
            </label>
            <label htmlFor="extra">
                Special Instructions: 
                <textarea
                name="special"
                id="extra"
                value={formState.special}
                onChange={inputChange}
                />
            </label>
            <button>Submit Order!!</button>
        </form>
        </div>
    )
}

export default PizzaForm;