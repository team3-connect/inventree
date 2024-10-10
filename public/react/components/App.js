import React, { useState, useEffect } from "react";
import { FunkoList } from "./FunkoList";
import { FunkoForm } from "./FunkoForm";
import { Navigation } from "./Navigation";
import { OneFunko } from "./OneFunko";
import { FormView } from "./FormView";
import { FunkoListView } from "./FunkoListView";
import { FunkoUpdateForm } from "./FunkoUpdateForm";
import { SinglePageView } from "./SinglePageView";
import {LoremParagraph} from "./LoremParagraph"
import Button from "@mui/material/Button";


// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { OneFunko } from "./OneFunko";

export const App = () => {

  const [funkoPops, setFunkoPops] = useState([]);
  const [funko, setFunko] = useState([]);
  const [view, setView] = useState(1);


  async function fetchFunkos() {
    try {
      const response = await fetch(`${apiURL}/funkopops`);
      const funkoData = await response.json();

      setFunkoPops(funkoData);
    } catch (err) {
      console.log("Oh an error fetching ALLFUNKOS! ", err);
    }
  }

  async function fetchPage(id) {
    try {
      const response = await fetch(`${apiURL}/funkopops/${id}`);
      const data = await response.json();
      setFunko(data);
      setView(2);
    } catch (err) {
      console.log("Oh no an error fetching a SINGLE funko! ", err);
    }
  }

  async function fetchDeletePage(id) {
    try {
      const url = `${apiURL}/funkopops/${id}`;
      const response = await fetch(url, { method: "DELETE" });
      const redirect = await fetch(`${apiURL}/funkopops`);
      const pagesData = await redirect.json();
      setFunkoPops(pagesData);
    } catch (err) {
      console.log("Oh no an error DELETING a funko! ", err);
    }
  }

  useEffect(() => {
    fetchFunkos();
  }, []);

  return (
    <>
      { view === 1 ? (
        <>
            <Navigation setView={setView} />

            <FunkoListView 
              funkoPops={funkoPops}
              fetchPage={fetchPage}
              fetchDeletePage={fetchDeletePage}
            />
        </>
      ) : view === 2 ? (
        <>
            <Navigation setView={setView}/>
            {/* <OneFunko 
              funko={funko}
              setFunko={setFunko}
              fetchDeletePage={fetchDeletePage}
              setView={setView}
            /> */}

<main className="spMainEverything">

            <SinglePageView 
              funko={funko} 
              fetchDeletePage={fetchDeletePage} 
              setFunko={setFunko}
              setView={setView}
              view={view}
            />

          </main>

        </>
      ) :  view === 3 ? ( <>
          <FormView />
      </>
      ) : null
    }
    </>
  );
};
