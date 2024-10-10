import React, { useState } from "react";
import { Funko } from "./Funko";
import apiURL from "../api";
import { funkopops } from "../../../server/seedData";


export const FunkoUpdateForm = ({ id }) => {

  const [funko, setFunko] = useState(funkopops);

  function handleChange(e) {
    setFunko({ ...funko, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    //  e.preventDefault();
    try {
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

    } catch (error) {
      console.error(error);
    }
  }

  return (<form onSubmit={handleSubmit}>

    <div>
      <textarea
        name="name"
        value={funko.funkoPops}
        onChange={handleChange}
        placeholder="name"
        maxlength="50"
      ></textarea>
      <textarea
        name="description"
        value={funko.description}
        onChange={handleChange}
        placeholder="description"
        maxlength="254"
      ></textarea>
      <textarea
        name="price"
        value={funko.price}
        onChange={handleChange}
        placeholder="price"
        maxlength="8"
      ></textarea>
      <textarea
        name="category"
        value={funko.category}
        onChange={handleChange}
        placeholder="Category"
        maxlength="23"
      ></textarea>
      <textarea
        name="image"
        value={funko.image}
        onChange={handleChange}
        placeholder="Image"
      ></textarea>
    </div>


    <button type="submit">Update Item</button>

  </form>

  );
};
