import React from "react";

export const Funko = (props) => {
  return (
    <>
      <h3>{props.funkoPop.name}</h3>
      {console.log(props.funkoPop.name)}
      <img src={props.funkoPop.image} alt={props.funkoPop.name} />
    </>
  );
};
