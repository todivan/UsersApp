const UserRow = (user) => {
    return(
        <tr>
        <th scope="row">{user.id}</th>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.age}</td>
        </tr>
    )
}

export default UserRow;