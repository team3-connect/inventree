import Button from "@mui/material/Button";
import { FunkoUpdateForm } from "./FunkoUpdateForm";


export const OneFunko = ({ funko, setFunko, fetchDeletePage, setView }) => {
  console.log(`**ONEFUNKO: ${funko.name}`)
  return (
    <>
      <div className="funko-item">
        <h1>Viewing One Funko</h1>
        <div class="funko-content">
          <h3>{funko.name}</h3>
          <p>{funko.description}</p>
          <p>{funko.category}</p>
          <p>{funko.price}</p>
          <img src={funko.image}></img>
          <div class="funko-options">
            <Button
              onClick={() => {
                setView(1)
              }}
              variant="contained"
            >Back Home
            </Button>
            <Button
              onClick={() => {
                fetchDeletePage(funko.id);
                setView(1)
              }}
              variant="outlined"
              className="delete-btn"
            >DELETE
            </Button>
          </div>
        </div>
        <FunkoUpdateForm id={funko.id} />
      </div>
    </>
  )
}