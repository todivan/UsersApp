import { useState, useEffect, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppContext from "./AppContext";
import navValues from "../helpers/navValues";

const URL = 'https://dummyjson.com/users/';

const UserDetails = () => {
    const { param: userId } = useContext(AppContext);
    const { navigate } = useContext(AppContext);
    const [user, setUser] = useState([])

    useEffect(() => {console.log("ITTest: " + URL + userId)
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
                <div className="col-2 text-right"><b>ID: </b></div>
                <div className="col-6">{user.id}</div>
            </div>
            <div className="row">
                <div className="col-2"><b>firstName: </b></div>
                <div className="col-6">{user.firstName}</div>
            </div>
            <div className="row">
                <div className="col-2"><b>lastName: </b></div>
                <div className="col-6">{user.lastName}</div>
            </div>
            <div className="row">
                <div className="col-2"><b>gender: </b></div>
                <div className="col-6">{user.gender}</div>
            </div>
            {/* <div className="row">
                <div className="col-2"><b>address: </b></div>
                <div className="col-6">{user.address.city}</div>
            </div>
            <div className="row">
                <div className="col-2"><b>company: </b></div>
                <div className="col-6">{user.company.name}</div>
            </div> */}
            <div className="row">
                <div className="col-2">
                    <button type="button" className="btn btn-primary p-y-2 m-y-2" onClick={goBack}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default UserDetails;