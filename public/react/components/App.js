import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { FunkoList } from './FunkoList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);
	const [funkos, setFunkos] = useState([]);

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			console.log(saucesData)
			
			setSauces(saucesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	async function fetchFunkos(){
		try {
			const response = await fetch(`${apiURL}/funkopops`);
			const funkosData = await response.json();
			console.log(funkosData)
			setFunkos(funkosData);
		} catch (err) {

			console.log("Oh no an error! ", err)
		}
	}


	useEffect(() => {
		fetchSauces();
		fetchFunkos();
	}, []);

	return (
		<main>	
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<SaucesList sauces={sauces} />
			<FunkoList funkos={funkos} />
		</main>
	)
}