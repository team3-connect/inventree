import React, { useState } from "react";
import { Funko } from "./Funko";
import apiURL from "../api";
export const FunkoUpdateForm = ({id}) => {
    const [funko, setFunko] = useState({
      name: "",
      description: "",
      price: "",
      category: "",
      image: "",
    });
  
    function handleChange(e) {
      setFunko({ ...funko, [e.target.name]: e.target.value });
    }
  
    async function handleSubmit(e) {
      //  e.preventDefault();
        try{
        const response = await fetch(`${apiURL}/funkopops/${id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(funko),
        });
       const data = await response.json();
      setFunko({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });
      console.log(funko)
        console.log(response)
        console.log(data)
        console.log(id)
        console.log(`${apiURL}/funkopops/${id}`)
        console.log(data.name)
      } catch (error) {
        console.error(error);
      }
      }
  
    return (
      <div>
        <h1>Update Funko</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={funko.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            name="description"
            value={funko.description}
            onChange={handleChange}
            placeholder="Description"
          />
          <input
            name="price"
            value={funko.price}
            onChange={handleChange}
            placeholder="Price"
          />
          <input
            name="category"
            value={funko.category}
            onChange={handleChange}
            placeholder="Category"
          />
          <input
            name="image"
            value={funko.image}
            onChange={handleChange}
            placeholder="Image"
          />
          <button type="submit">Update Funko</button>
        </form>
      </div>
    );
  };
  