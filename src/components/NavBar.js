import { useContext } from "react";
import { PagingContext, AppContext } from "./AppContext";
import navValues from "../helpers/navValues";

const NavBar = () => {
    const { changePage } = useContext(PagingContext);
    const { navigate } = useContext(AppContext);

    function load() {
        changePage(0);
    }

    function clear() {
        changePage(undefined);
        navigate(navValues.usersTable);
    }

    return(
        <div className="row">
            <div className="h-15 col-6">
                <button type="button" className="btn btn-primary p-y-2 m-y-2" onClick={load}>Load</button>
            </div>

            <div className="h-15 col-6">
                <button type="button" className="btn btn-primary p-y-2 m-y-2" onClick={clear}>Clear</button>
            </div>
        </div>
    )
}

export default NavBar;