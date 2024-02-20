import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = 'https://dummyjson.com/users/';

const UserDetails = (props) => {

    const [user, setUser] = useState([])

    useEffect(() => {console.log("ITTest: " + URL + props.userId)
        const fetchData = async () => {
            const result = await fetch(URL + props.userId)
            result.json().then(fetchUser => {
                console.log(fetchUser)
                setUser(fetchUser)
            })
        }

        fetchData();
    }, [props.userId])
    
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
        </div>
    );
}

export default UserDetails;