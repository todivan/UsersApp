import { useState, useEffect, useContext } from "react";
import { AppContext} from "./AppContext";
import navValues from "../helpers/navValues";
import UserDetailsRow from "./UserDetailsRow.js";

const URL = 'https://dummyjson.com/users/';

const UserDetails = () => {
    const { navigate, param: userId } = useContext(AppContext);
    const [user, setUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL + userId)
            result.json().then(fetchUser => {
                console.log(fetchUser)
                setUser(fetchUser)
            })
        }

        fetchData();
    }, [userId])

    function goBack() {
        navigate(navValues.usersTable)
    }
    
    return(
        <div>
            <div className="row">
                <h1>User details</h1>
                <hr/>
            </div>
            <UserDetailsRow label="Username" value={user.username} />
            <UserDetailsRow label="ID" value={user.id} />
            <UserDetailsRow label="First Name" value={user.firstName} />
            <UserDetailsRow label="UserLast Namename" value={user.lastName} />
            <UserDetailsRow label="Gender" value={user.gender} />
            <UserDetailsRow label="Email" value={user.email} />
            <UserDetailsRow label="Phone" value={user.phone} />
            {/* <UserDetailsRow label="City" value={user.address.city} /> 
            <UserDetailsRow label="Company" value={user.company.name} />*/}
            <div className="row"> 
                <div className="col-2">
                    <button type="button" className="btn btn-primary p-y-2 m-y-2" onClick={goBack}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;