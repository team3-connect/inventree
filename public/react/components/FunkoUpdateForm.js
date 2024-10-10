import React, { useState } from "react";
import { Funko } from "./Funko";
import apiURL from "../api";
import Button from "@mui/material/Button";
import { funkopops } from "../../../server/seedData";
import { useNavigate } from "react-router-dom";

export const FunkoUpdateForm = ({ id }) => {
  const [funko, setFunko] = useState(funkopops);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setFunko({ ...funko, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${apiURL}/funkopops/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(funko),
      });
      await response.json();
      setFunko({
        name: "",
        description: "",
        price: "",
        category: "",
        image: "",
      });
      console.log(funko);
      console.log(response);
      console.log(data);
      console.log(id);
      console.log(`${apiURL}/funkopops/${id}`);
      console.log(data.name);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={funko.funkoPops}
        onChange={handleChange}
        placeholder="name"
      />

      <textarea
        name="description"
        value={funko.description}
        onChange={handleChange}
        placeholder="description"
      ></textarea>
      <textarea
        name="price"
        value={funko.price}
        onChange={handleChange}
        placeholder="price"
      ></textarea>
      <textarea
        name="category"
        value={funko.category}
        onChange={handleChange}
        placeholder="Category"
      ></textarea>
      <textarea
        name="image"
        value={funko.image}
        onChange={handleChange}
        placeholder="Image"
      ></textarea>

      <button type="submit">Update Item</button>
    </form>
  );
};
