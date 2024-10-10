import React, { useState } from "react";
import { Funko } from "./Funko";
import apiURL from "../api";
import Button from '@mui/material/Button';
import { funkopops } from "../../../server/seedData";
import Button from "@mui/material/Button";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import OutlinedInput from '@mui/material/OutlinedInput';


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

  return (<form onSubmit={handleSubmit} className="funkoUpdateForm">

    <div className="">
      <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Name"
          name="name"
          maxLength="50"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Description</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Description"
          name="description"
          maxLength="250"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Price</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue={funko.price}
          label="Price"
          name="price"
          maxLength="50"
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Category</InputLabel>
        <OutlinedInput
          id="component-outlined"
          defaultValue={funko.category}
          label="Category"
          name="category"
          maxLength="50"
          onChange={handleChange}

        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Image</InputLabel>
        <OutlinedInput
          id="component-outlined"
          label="Image"
          name="image"
          maxLength="250"
          onChange={handleChange}
        />
      </FormControl>
    </div>

    <Button
      onClick={() => {
        fetchDeletePage(funko.id);
        setView(1)
      }}
      type="submit"
      variant="outlined"
      className="delete-btn"
    >Update
    </Button>

    {/* <textarea

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
  </section>
      <Button type="submit">Update Item</Button>
  */}
  </form>

  );
};
