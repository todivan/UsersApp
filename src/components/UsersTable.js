import { useState, useEffect } from "react";
import UserRow from "./UserRow";
import TableHeader from "./TableHeader";
import TablePagging from "./TablePagging";
import AppContext from './AppContext';
import { useContext } from 'react';

const USERS_PER_PAGE = 10;
const URL = 'https://dummyjson.com/users?limit=' + USERS_PER_PAGE + '&skip=10&select=firstName,lastName,age';

const UsersTable = ({selectUser}) => {

    const [users, setUsers] = useState([])

    const {appState, setAppState} = useContext(AppContext)



    useEffect(() => {
        const fetchData = async () => {
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
        <table className="table">
        <TableHeader></TableHeader>
            <tbody>
                {users.map((el) => ( <UserRow user={el} selectUser={selectUser}></UserRow>))}
            </tbody>
        </table>
        <TablePagging></TablePagging>
    </div>
    )
}

export default UsersTable;