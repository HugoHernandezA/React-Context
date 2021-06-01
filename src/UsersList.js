import React from "react";
import User from './UsersContext';

function UsersList(props) {
    return (
        <div>
            {props.users.map(c => <User key={c.id} name={c.name} avatar={c.avatar}/>)}
        </div>
    );
}

export default UsersList;