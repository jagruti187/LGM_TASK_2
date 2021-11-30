import React from 'react'
import UserItem from './5';

const Users = ({personData}) => {
    return (
        <div className="usergrid">
            {personData.map((user) =><UserItem key={ user.id}  user={user} />)}
        </div>
    )
}

export default Users;