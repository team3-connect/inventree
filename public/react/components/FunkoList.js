import React from "react";
import { Funko } from "./Funko";

export const FunkoList = ({ funkoPops }) => {
  return (
    <>
      {funkoPops.map((funkoPop, idx) => {
        return <Funko funkoPop={funkoPop} key={idx}
       />;

      })}
    </>
  );
};
