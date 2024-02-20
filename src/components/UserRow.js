const UserRow = ({user, selectUser}) => {
    return(
        <tr onClick={() => selectUser(user.id)}>
            <th scope="row">{user.id}</th>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
        </tr>
    )
}

export default UserRow;