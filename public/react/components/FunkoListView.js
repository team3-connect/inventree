import {FunkoList} from "./FunkoList"


export const FunkoListView = ({fetchPage, funkoPops, fetchDeletePage}) => {

    return (

        <>
            <div className="">
                <FunkoList
                    funkoPops={funkoPops}
                    fetchPage={fetchPage}
                    fetchDeletePage={fetchDeletePage}
                />
            </div>
        </>
    )
}