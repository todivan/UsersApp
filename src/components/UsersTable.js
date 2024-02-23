import { useState, useEffect, useContext } from "react";
import UserRow from "./UserRow";
import TableHeader from "./TableHeader";
import TablePagging from "./TablePagging";
import {PagingContext} from "./AppContext";
import consts from "../helpers/consts";

const UsersTable = () => {

    const { changePage, pageNumber } = useContext(PagingContext);
    const [users, setUsers] = useState([])

      useEffect(() => {
        if(pageNumber === undefined){
            setUsers([]);
        } else {
            const fetchData = async () => {
                const skip = pageNumber * consts.USERS_PER_PAGE;
                if(skip !== undefined){
                    const URL = 'https://dummyjson.com/users?limit=' + consts.USERS_PER_PAGE + '&skip=' + skip + '&select=firstName,lastName,age';
                    const result = await fetch(URL)
                    result.json().then(fetchUsers => {
                        console.log(fetchUsers)
                        setUsers(fetchUsers.users);
                        changePage(pageNumber, fetchUsers.total)
                    })
                }
            }

            fetchData();
        }
    }, [pageNumber, changePage])

    return(
    <div className="h-70 p-y-2 m-y-2">
        <table className="table table-hover">
        <TableHeader></TableHeader>
            <tbody>
                {users.map((el) => ( <UserRow user={el}></UserRow>))}
            </tbody>
        </table>
        <TablePagging></TablePagging>
    </div>
    )
}

export default UsersTable;