import { useState } from 'react'

import './App.css'
import UserForm from './components/UserForm/UserForm'
import UserList from './components/UserList/UserList';
import Message from './components/Message/Message';

function App() {
  const [users,setUsers] = useState([]);
  const addUserData = (user)=>{
    setUsers(prevState=>{
      return [user,...prevState]
    })
  }
  return (
    <div className='app'>
      <UserForm onAddUserData={addUserData}/>
      <UserList users={users}/>
    </div>
  )
}

export default App
