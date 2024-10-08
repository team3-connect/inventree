import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { FunkoList } from "./FunkoList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { Funko } from "./Funko";
import { funkopops } from "../../../server/seedData";
console.log(apiURL);
export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [funkoPops, setFunkoPops] = useState([]);

  async function fetchFunkos() {
    try {
      console.log(apiURL);
      const response = await fetch(`${apiURL}/funkopops`);
      const funkoData = await response.json();

      setFunkoPops(funkoData);
      console.log(funkoPops);
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
    fetchSauces();
    fetchFunkos();
  }, []);

  return (
    <main>
      <h1>FunkoPop Store</h1>
      <h2>All things 🔥</h2>
      <SaucesList sauces={sauces} />
      <FunkoList funkoPops={funkoPops} />
    </main>
  );
};
