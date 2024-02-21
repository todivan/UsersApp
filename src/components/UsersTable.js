import { useState, useEffect, useContext } from "react";
import UserRow from "./UserRow";
import TableHeader from "./TableHeader";
import TablePagging from "./TablePagging";
import AppContext from "./AppContext";

const USERS_PER_PAGE = 10;


const UsersTable = () => {

    const { pageNumber } = useContext(AppContext);
    const [users, setUsers] = useState([])

      useEffect(() => {
        const fetchData = async () => {
            const skip = pageNumber ? pageNumber * USERS_PER_PAGE : 0;
            const URL = 'https://dummyjson.com/users?limit=' + USERS_PER_PAGE + '&skip=' + skip + '&select=firstName,lastName,age';
            const result = await fetch(URL)
            result.json().then(fetchUser => {
                console.log(fetchUser.users)
                setUsers(fetchUser.users)
            })
        }

        fetchData();
    }, [pageNumber])

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