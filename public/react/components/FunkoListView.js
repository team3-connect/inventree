import {FunkoList} from "./FunkoList"


export const FunkoListView = ({fetchPage, funkoPops, fetchDeletePage}) => {

    return (

        <>
            <h1>LISTVIEW</h1>
            <FunkoList 
                funkoPops={funkoPops}
                fetchPage={fetchPage}
                fetchDeletePage={fetchDeletePage}
            />
        </>
    )
}