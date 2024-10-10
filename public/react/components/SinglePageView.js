import React, {useState, useEffect} from "react";
import { Funko } from "./Funko";
import Button from '@mui/material/Button';
import { FunkoUpdateForm } from "./FunkoUpdateForm";
import {LoremParagraph} from "./LoremParagraph"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const SinglePageView = ({ funkoPops, fetchPage, fetchDeletePage, funko, setView, view }) => {
    return(<>
        <main className="singlePageMain">
            <section>
            <Card sx={{ width: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={funko.image}
        title={funko.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {funko.price}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {funko.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button onClick={() => { setView(1);}}>
              Back Home
            </Button>
            <Button onClick={() => { fetchDeletePage(funko.id); setView(1);}}>
              DELETE
            </Button>
      </CardActions>
    </Card>
            </section>
        {/* <section className="possHeader">
            <h1><b>FunkoPop Store</b></h1>
            <p className="singlePageFunkoHead">View One 🔥</p>
            </section> */}

            <section className="singlePageinfo">
                <div >
                    <img className="singlePageImgDiv" src={funko.image}/>
                </div>
                <div className="singlePageNamePrice">
                    <p><b>{funko.name}</b></p>
                    <p><b>{funko.price}</b></p>
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