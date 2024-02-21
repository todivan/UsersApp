import { useContext } from "react";
import AppContext from "./AppContext";

const TablePagging = () => {
    const { navigate, param: userId } = useContext(AppContext);

    return (
        <div className="row">
            <div className="h-15 col-6">
                <button type="button" className="btn btn-primary p-y-2 m-y-2 float-left">Previous</button>
            </div>
            <div className="h-15 col-6">
                <button type="button" className="btn btn-primary p-y-2 m-y-2 float-right">Next</button>
            </div>
        </div>
    );
}

export default TablePagging;