import {v4 as uuidv4} from "uuid";
import "./UserList.css";
const UserList = (props) => {
  return (
    <div className="users">
        <ul className='user-list'>
            {
                props.users.length === 0?(<p>there are not users</p>):(
                    props.users.map((user)=>(
                        <li key={uuidv4()}>{user.userName} ({user.userAge})</li> 
                        
                    ))
                )
            }
        </ul>
    </div>
  )
}

export default UserList