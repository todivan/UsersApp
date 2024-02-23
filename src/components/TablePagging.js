import { useContext } from "react";
import {PagingContext} from "./AppContext";

const TablePagging = () => {
    const { changePage, pageNumber } = useContext(PagingContext);

    function navigatePrevious(){
        changePage(pageNumber === 0 ? 0 : pageNumber - 1)
    }

    function navigateNext(){
        changePage(pageNumber + 1)
    }

    return (
        <div className="row">
            <div className="h-15 col-6">
                <button type="button" className="btn btn-primary p-y-2 m-y-2 float-left" disabled={pageNumber === 0} onClick={navigatePrevious}>Previous</button>
            </div>
            <div className="h-15 col-6">
                <button type="button" className="btn btn-primary p-y-2 m-y-2 float-right" onClick={navigateNext}>Next</button>
            </div>
        </div>
    );
}

export default TablePagging;