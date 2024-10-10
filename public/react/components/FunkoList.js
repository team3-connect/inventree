import React from "react";
import { Funko } from "./Funko";
import Button from '@mui/material/Button';
export const FunkoList = ({ funkoPops, fetchPage, fetchDeletePage }) => {
  return (
    <>
      <div>
        <div>
          <h1>FunkoPop Store</h1>
          <h2>All FUNKOPOPS 🔥</h2>
        </div>
        {funkoPops.map((funkoPop, idx) => {
          return (<div>
            <section className="container">
              <a onClick={() => fetchPage(funkoPop.id)}>
                <Funko funkoPop={funkoPop} key={idx}
                />
              </a>
              <Button variant="outlined" size="small" className='delete' style={{ borderRadius: "10px", width: "100px" }}
                onClick={() => { fetchDeletePage(funkoPop.id); }}>Delete</Button>
              <Button variant="outlined" size="small" className="pageNav"
                style={{ borderRadius: "10px", width: "200px" }}
                onClick={() => fetchPage(funkoPop.id)}>{funkoPop.name}</Button>
            </section>
          </div>);
        })}
      </div>
    </>
  );
};
