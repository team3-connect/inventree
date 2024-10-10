import React, {useState, useEffect} from "react";
import { Funko } from "./Funko";
import Button from '@mui/material/Button';
import { FunkoUpdateForm } from "./FunkoUpdateForm";
import {LoremParagraph} from "./LoremParagraph"


export const SinglePageView = ({ funkoPops, fetchPage, fetchDeletePage, funko, id, setView }) => {
    return(<>
        <main className="singlePageMain">
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
            <FunkoUpdateForm id={funko.id}/>
            </section>
        </main>
    </>)
}