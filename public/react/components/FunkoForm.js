
import React, { useState } from "react";
import { Funko } from "./Funko";
import apiURL from "../api";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";

export const FunkoForm = () => {
  const [funko, setFunko] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setFunko({ ...funko, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
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
      setSuccessMessage("Funko added successfully!");
      setTimeout(() => {
        navigate("/funkopops");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Navbar />
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
      {successMessage && <h2>{successMessage}</h2>}
    </div>
  );
};
