import React, { useState, useEffect } from "react";
import { FunkoList } from "./FunkoList";
import Button from "@mui/material/Button";
import { FunkoForm } from "./FunkoForm";
import { FunkoUpdateForm } from "./FunkoUpdateForm";
import { SinglePageView } from "./SinglePageView";
import {LoremParagraph} from "./LoremParagraph"

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { Navbar } from "./Navbar";

console.log(apiURL);
export const App = () => {
  const [funkoPops, setFunkoPops] = useState([]);
  const [funko, setFunko] = useState([]);
  const [view, setView] = useState(true);

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

  async function fetchPage(id) {
    try {
      const response = await fetch(`${apiURL}/funkopops/${id}`);
      const data = await response.json();
      setFunko(data);
      setView(false);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchDeletePage(id) {
    try {
      const url = `${apiURL}/funkopops/${id}`;
      const response = await fetch(url, { method: "DELETE" });
      const redirect = await fetch(`${apiURL}/funkopops`);
      const pagesData = await redirect.json();
      setFunkoPops(pagesData);
      console.log(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchFunkos();
  }, []);

  return (
    <>
      {!view ? (
        <>
          {" "}
          <main className="spMainEverything">
            <section className="possHeader">
            <h1 className="singlePageFunkoHead"><b>FunkoPop Store</b></h1>
            <h2>All things 🔥</h2>
            </section>
            <SinglePageView funko={funko} fetchDeletePage={fetchDeletePage} id={funko.id} setFunko={setView}/>
            <div className="spMainButtonDiv">
            <Button onClick={() => { setView(true);}}>
              Back Home
            </Button>
            <Button onClick={() => { fetchDeletePage(funko.id); setView(true);}}>
              DELETE
            </Button>
            </div>
            <div>
            <FunkoUpdateForm id={funko.id}/>
            </div>
          </main>
        </>
      ) : (
        <>
          <main>
            <h1>FunkoPop Store</h1>
            <h2>All things 🔥</h2>
            <Navbar />
            <FunkoList
              fetchPage={fetchPage}
              funkoPops={funkoPops}
              fetchDeletePage={fetchDeletePage}
            />
          </main>
        </>
      )}
    </>
  );
};
