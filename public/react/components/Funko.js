import React from 'react';


export const Funko = (props) => {

  return <>
    <h3>{props.funko.name}</h3>
    <img src={props.funko.image} />
  </>
} 
	