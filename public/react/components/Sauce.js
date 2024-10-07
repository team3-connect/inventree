import React from "react";

export const Sauce = (props) => {
  return (
    <>
      <h3>{props.sauce.name}</h3>
      {console.log(props.sauce.name)}
      <img src={props.sauce.image} alt={props.sauce.name} />
      {console.log(props.sauce.image)}
    </>
  );
};
