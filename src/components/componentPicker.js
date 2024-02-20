import navValues from "../helpers/navValues";
import UsersTable from "./UsersTable";
import UserDetails from "./UserDetails";

const ComponentPicker = ({currentNavLocation}) => {
    switch(currentNavLocation){
        case navValues.usersTable:
            return <UsersTable />;
        case navValues.userDetails:
            return <UserDetails />;
        default:
            return (<h3>Invalid navigation {currentNavLocation}</h3>);
    }
};

export default ComponentPicker;