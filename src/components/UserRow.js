import { useContext } from "react";
import AppContext from "./AppContext";
import navValues from "../helpers/navValues";

const UserRow = ({user}) => {
    const { navigate } = useContext(AppContext);
    return(
        <tr onClick={() => navigate(navValues.userDetails, user.id)}>
            <th scope="row">{user.id}</th>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
        </tr>
    )
}

export default UserRow;