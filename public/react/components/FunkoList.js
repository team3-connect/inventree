import React from "react";
import { Funko } from "./Funko";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export const FunkoList = ({ funkoPops, fetchPage, fetchDeletePage }) => {
  return (
    <>
    <div className="alignAllcenter">
        <h1>FunkoPop Store</h1>
        <h2>All FUNKOPOPS 🔥</h2>
        </div>
      <div className="some-page-wrapper">
        
        <section className="row">
          {funkoPops.map((funkoPop, idx) => {
            return (<div>
              <section className="column">
                <Card sx={{ width: 345, height: 300}}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={funkoPop.image}
                    title={funkoPop.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {funkoPop.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      <p className="font-copy">{funkoPop.price}</p>
                    </Typography>
                  </CardContent>
                  <CardActions>
                  <Button variant="outlined" size="small" className='delete'
                  onClick={() => { fetchDeletePage(funkoPop.id); }}>Delete</Button>
                <Button variant="outlined" size="small" className="pageNav"
                  
                  onClick={() => fetchPage(funkoPop.id)}>View Funko</Button>
                  </CardActions>
                </Card>
                {/* <a onClick={() => fetchPage(funkoPop.id)}>
                  <Funko funkoPop={funkoPop} key={idx}
                  />
                </a>
                <Button variant="outlined" size="small" className='delete' style={{ borderRadius: "10px", width: "100px" }}
                  onClick={() => { fetchDeletePage(funkoPop.id); }}>Delete</Button>
                <Button variant="outlined" size="small" className="pageNav"
                  style={{ borderRadius: "10px", width: "200px" }}
                  onClick={() => fetchPage(funkoPop.id)}>{funkoPop.name}</Button> */}
              </section>
            </div>);
          })}
        </section>
      </div>
    </>
  );
};
