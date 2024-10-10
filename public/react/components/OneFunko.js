import Button from "@mui/material/Button";
import { FunkoUpdateForm } from "./FunkoUpdateForm";


export const OneFunko = ({funko, setFunko, fetchDeletePage, setView}) => {
    console.log(`**ONEFUNKO: ${funko.name}`)
    return (
        <>
            <div>
                <h1>Viewing One Funko</h1>
                <h3>{funko.name}</h3>
                <p>{funko.description}</p>
                <p>{funko.price}</p>
                <img src={funko.image}></img>
                <Button
              onClick={() => {
                setView(1)
              }}
            >
              Back Home
            </Button>
            <Button
              onClick={() => {
                fetchDeletePage(funko.id);
                setView(1)
              }}
            >
              DELETE
            </Button>
            <FunkoUpdateForm id={funko.id} />
            </div>
        </>
    )
}