import { useContext } from "react";
import { PagingContext, AppContext, UsersPerPageContext } from "./AppContext";
import navValues from "../helpers/navValues";
import consts from "../helpers/consts";

const NavBar = () => {
    const { changePage, pageNumber } = useContext(PagingContext);
    const { navigate } = useContext(AppContext);
    const { changeUsersPerPage } = useContext(UsersPerPageContext);

    function setUsersPerPage(e) {
        const re = /^[0-9\b]+$/;

    // if value is not blank, then test the regex

        if (e.target.value === '' || re.test(e.target.value)) {
            let usersPerPage = parseInt(e.target.value);
            if(usersPerPage > consts.MAXPER_PAGE)
            {
                alert("Maximum users par page is: " + consts.MAXPER_PAGE);
                usersPerPage = consts.MAXPER_PAGE;
                e.target.value = consts.MAXPER_PAGE;
            }
            changeUsersPerPage(e.target.value === "" ? consts.DEFAULT_USERS_PER_PAGE : usersPerPage);
        } else {
            e.target.value = e.target.value.slice(0, -1);
        }
    }

    function load() {
        changePage(0, consts.DEFAULT_USERS_PER_PAGE);
    }

    function clear() {
        changePage(undefined);
        navigate(navValues.usersTable);
    }

    return(
        <div className="row">
                <div className="h-15 col-4 float-end">
                    <label className="col-2 text-nowrap">Users per page: </label>
                </div>
                <div className="h-15 col-2 float-start">
                    <input pattern="[0-9]*" placeholder={consts.DEFAULT_USERS_PER_PAGE} onChange={e => setUsersPerPage(e)} type="text" className="form-control input-sm col-2" ></input>
                </div>

                <div className="h-15 col-2 float-end">
                    <button type="button" className="btn btn-primary p-y-2 m-y-2" disabled={pageNumber !== undefined} onClick={load}>Load</button>
                </div>

                <div className="h-15 col-2 float-start">
                    <button type="button" className="btn btn-primary p-y-2 m-y-2" disabled={pageNumber === undefined} onClick={clear}>Clear</button>
                </div>
        </div>
    )
}

export default NavBar;