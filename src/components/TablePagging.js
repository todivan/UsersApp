import { useContext } from "react";
import {PagingContext} from "./AppContext";
import consts from "../helpers/consts";

const TablePagging = () => {
    const { changePage, pageNumber, totalCount: totalUsersNumber } = useContext(PagingContext);

    function navigatePrevious(){
        if(pageNumber !== undefined) {
            changePage(pageNumber === 0 ? 0 : pageNumber - 1);
        }
    }

    function navigateNext(){
        if(pageNumber !== undefined) {
            changePage((pageNumber + 1) * consts.USERS_PER_PAGE > totalUsersNumber ? pageNumber : pageNumber + 1);
        }
    }

    function previousDisabled(){
        return pageNumber === 0 || pageNumber === undefined;
    }

    function nextDisabled(){
        return (pageNumber + 1) * consts.USERS_PER_PAGE >= totalUsersNumber || pageNumber === undefined;
    }

    return (
        <div className="row">
            <div className="h-15 col-6">
                <button type="button" className="btn btn-primary p-y-2 m-y-2 float-left" disabled={previousDisabled()} onClick={navigatePrevious}>Previous</button>
            </div>
            <div className="h-15 col-6">
                <button type="button" className="btn btn-primary p-y-2 m-y-2 float-right" disabled={nextDisabled()} onClick={navigateNext}>Next</button>
            </div>
        </div>
    );
}

export default TablePagging;