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
    <div className="input-container input-items">
      <div>
        <h1>Add New Funko</h1>
        <p>Please fill out this form and your funko will be sent</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="">Name:</label>
          <input
            name="name"
            value={funko.name}
            onChange={handleChange}
            placeholder="Name"
            className="input-group"
          />
        </div>
        <div className="">
          <label>Description:</label>
          <input
            name="description"
            value={funko.description}
            onChange={handleChange}
            placeholder="Description"
            className="input-group"
          />
        </div>
        <div className="">
          <label className="mt-1">Price:</label>
          <input
            name="price"
            value={funko.price}
            onChange={handleChange}
            placeholder="Price"
            className="input-group"
          />
        </div>

        <div>
          <label className="mt-1">Category:</label>
          <input
            name="category"
            value={funko.category}
            onChange={handleChange}
            placeholder="Category"
            className="input-group"
          />
        </div>
        <div>
          <label className="mt-1">Image:</label>
          <input
            name="image"
            value={funko.image}
            onChange={handleChange}
            placeholder="Image"
            className="input-group"
          />
        </div>
        <div>
          <button className="btn btn-primary mt-3" type="submit">Add Funko</button>
        </div>
      </form>
    </div>
  );
};
