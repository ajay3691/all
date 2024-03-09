import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadDataAction } from '../redux/user/user.action'

const User = () => {
    let dispatch = useDispatch();
    let users = useSelector((state) => {
        return state.users;
    });

    useEffect(() => {
        //dispatch an Action
        dispatch(loadDataAction());
    }, /* [] */)

    return (
        <div>
            <h1>User Data redux get api data</h1>
            <pre>{JSON.stringify(users)}</pre>
            {
                users.users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name.slice(-6)}</td>
                        <td>{user.email}</td>
                    </tr>
                ))
            }
        </div>
    )
}

export default User
