import React from "react";

export const Funko = (props) => {
  return (
    <>
      <h3>{props.funkoPop.name}</h3>
      <img src={props.funkoPops.image} alt={props.funkoPops.name} />
    </>
  );
};
