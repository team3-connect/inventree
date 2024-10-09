import React, { useState, useEffect } from "react";
import { SaucesList } from "./SaucesList";
import { FunkoList } from "./FunkoList";
import Button from '@mui/material/Button';
import { FunkoForm } from "./FunkoForm";
import { FunkoUpdateForm } from "./FunkoUpdateForm";

// import and prepend the api url to any fetch calls
import apiURL from "../api";
import { Funko } from "./Funko";
import { funkopops } from "../../../server/seedData";
console.log(apiURL);
export const App = () => {
  const [sauces, setSauces] = useState([]);
  const [funkoPops, setFunkoPops] = useState([]);
  const[funko, setFunko] = useState([])
  const [view, setView] = useState(true)

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
  async function fetchPage(id){
    try{
    const response = await fetch(`${apiURL}/funkopops/${id}`);
   const data = await response.json()
    setFunko(data)
    console.log(response)
    console.log(data)
    console.log(id)
    console.log(`${apiURL}/funkopops/${id}`)
    console.log(data.name)
    setView(false)
  } catch (err) {
    console.log("Oh no an error! ", err);
  }
  }
  
  async function fetchDeletePage(id){
    try{
    const url = `${apiURL}/funkopops/${id}`
    const response = await fetch(url, {method: 'DELETE'});
    const redirect = await fetch(`${apiURL}/funkopops`)
    const pagesData = await redirect.json()
    setFunkoPops(pagesData)
    console.log(pagesData)
  } catch (err) {
    console.log("Oh no an error! ", err);
  }
    
  }

  useEffect(() => {
    fetchSauces();
    fetchFunkos();
  }, []);

  return (
	<>
	{!view ? (<> <main>
		<h1>FunkoPop Store</h1>
		<h2>All things 🔥</h2>
		<h2>{funko.name}</h2>
		<img src={funko.image}></img>
		<Button onClick ={() => {setView(true)}}>Back Home</Button>
    <Button onClick ={() => {fetchDeletePage(funko.id); setView(true)}}>DELETE</Button>
    <FunkoUpdateForm id={funko.id}/>

	  </main></>)
	  :
    (<><main>
      <h1>FunkoPop Store</h1>
      <h2>All things 🔥</h2>
      <FunkoForm />
      <SaucesList fetchPage={fetchPage} sauces={sauces} />
      <FunkoList fetchPage={fetchPage}  funkoPops={funkoPops} fetchDeletePage={fetchDeletePage} />

    </main></>)}
	</>);
};
