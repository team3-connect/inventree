import React from "react";
import { Funko } from "./Funko";

export const FunkoList = ({ funkoPops, fetchPage }) => {
  return (
    <>
      {funkoPops.map((funkoPop, idx) => {
        return( <div><a onClick ={() =>fetchPage(funkoPop.id)}>
            <Funko funkoPop={funkoPop} key={idx}
       /></a>
       <button variant="outlined"  size="small" className= "pageNav" 
        style={{borderRadius: "10px", width: "200px"}} onClick ={() =>fetchPage()}>{funkoPop.name}</button></div>);

      })}
    </>
  );
};
