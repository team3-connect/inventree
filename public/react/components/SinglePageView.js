import React, {useState, useEffect} from "react";
import { Funko } from "./Funko";
import Button from '@mui/material/Button';
import { FunkoUpdateForm } from "./FunkoUpdateForm";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const SinglePageView = ({ funkoPops, fetchPage, fetchDeletePage, funko, setView, view }) => {
    return(<>
        <main className="singlePageMain">
    
            <section className="singlePageinfo" style={{paddingTop: "10px"}}>
                <div >
                    <img className="singlePageImgDiv" src={funko.image}/>
                </div>
                <div className="singlePageNamePrice">
                    <p><b>{funko.name}</b></p>
                    <p><b>{funko.price}</b></p>
                </div>
                <div className="singlePageDescription">
                    {funko.description}
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