import React, {useState, useEffect} from "react";
import { Funko } from "./Funko";
import Button from '@mui/material/Button';
import { FunkoUpdateForm } from "./FunkoUpdateForm";
import {LoremParagraph} from "./LoremParagraph"


export const SinglePageView = ({ funkoPops, fetchPage, fetchDeletePage, funko, id, setView }) => {
    return(<>
        <main className="singlePageMain">
        <section className="possHeader">
            <h1><b>FunkoPop Store</b></h1>
            <p className="singlePageFunkoHead">View One 🔥</p>
            </section>

            <section className="singlePageinfo">
                <div >
                    <img className="singlePageImgDiv" src={funko.image}/>
                </div>
                <div className="singlePageNamePrice">
                    <h1><b>{funko.name}</b></h1>
                    <h1><b>{funko.price}</b></h1>
                </div>
                <div className="singlePageDescription">
                    <LoremParagraph/>
                </div>
                            <div className="spMainButtonDiv">
            <Button onClick={() => { setView(1);}}>
              Back Home
            </Button>
            <Button onClick={() => { fetchDeletePage(funko.id); setView(1);}}>
              DELETE
            </Button>
            </div>
            </section>

            <FunkoUpdateForm id={funko.id}/>

        </main>
    </>)
}