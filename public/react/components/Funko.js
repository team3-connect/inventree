import React from "react";

export const Funko = (props) => {
  return (
    <>
      <h3>{props.funkoPop.name}</h3>
      <img src={props.funkoPop.image} alt={props.funkoPop.name} />
    </>
  );
};
