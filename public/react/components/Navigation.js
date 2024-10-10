import { FunkoForm } from "./FunkoForm"


export const Navigation = ({setView}) => {


  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Inventree</a>
          </div>
          <ul className="nav navbar-nav">
            <li><a href="/">Home</a></li>
            <li><a onClick={()=> setView(3)}>Add Funkopop</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}