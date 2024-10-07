import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { FunkoList } from "./FunkoList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { Funko } from "./Funko";
import { funkopops } from "../../../server/seedData";

export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [funkoPops, setFunkoPops] = useState([]);

  async function fetchFunkos() {
    try {
      const response = await fetch(`http://localhost:3000/api/funkopops`);
      const funkoData = await response.json();

      setFunkoPops(funkoData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();

      setSauces(saucesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    // fetchSauces();
    fetchFunkos();
  }, []);

  // useEffect(() => {
  //   fetchFunkos();
  // }, []);

  return (
    <main>
      <h1>FunkoPop Store</h1>
      <h2>All things 🔥</h2>
      <SaucesList sauces={sauces} />
      <FunkoList funkoPops={funkoPops} />
    </main>
  );
};
