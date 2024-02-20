import { useState, useEffect } from "react";
import UserRow from "./UserRow";
import TableHeader from "./TableHeader";
import TablePagging from "./TablePagging";

const USERS_PER_PAGE = 10;


const UsersTable = ({selectUser}) => {

    const [users, setUsers] = useState([])

      useEffect(() => {
        const fetchData = async () => {
            const skip = 10;
            const URL = 'https://dummyjson.com/users?limit=' + USERS_PER_PAGE + '&skip=' + skip + '&select=firstName,lastName,age';
            const result = await fetch(URL)
            result.json().then(fetchUser => {
                console.log(fetchUser.users)
                setUsers(fetchUser.users)
            })
        }

        fetchData();
    }, [])

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