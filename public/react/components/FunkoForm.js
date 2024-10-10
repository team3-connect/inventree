
import React, { useState } from "react";
import { Funko } from "./Funko";
import apiURL from "../api";

export const FunkoForm = () => {
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
    // e.preventDefault();
    try {
      const res = await fetch(`${apiURL}/funkopops`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(funko),
      });

      await res.json();
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

  return (
    <div>
      <h1>Add New Funko</h1>
      <form onSubmit={handleSubmit} className="funkoUpdateForm">
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
        <button type="submit">Add Funko</button>
      </form>
    </div>
  );
};
