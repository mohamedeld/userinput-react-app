
import {useState} from 'react';
import './UserForm.css';
import Message from '../Message/Message';
const UserForm = (props) => {
    const [userName,setUserName] = useState('');
    const [userAge,setUserAge] = useState('');
    const [error,setError] = useState();
    const handleUserName = (e)=>{
        setUserName(e.target.value);
    }
    const handleUserAge= (e)=>{
        setUserAge(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(userName.trim().length ===0 || userAge ===0){
            
            setError({
                message:"please enter your data"
            });
            return;
        }
        if(userAge <=0){
            
            setError({
                message:"age must be > 0"
            });
            return;
        }
        const userData = {
            userName,
            userAge
        };
        props.onAddUserData(userData);
        // setUserName('');
        // setUserAge('');
    }
    const handleError = ()=>{
        setError(null);
    }
  return (
    <>
    {error && <Message messagedata={error.message} onConfirm={handleError}/>}
        <form onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="username">user name</label>
                <input type="text" name="username" value={userName} onChange={handleUserName} />
            </div>
            <div className="form-control">
                <label htmlFor="age">user age</label>
                <input type="number" name="age" value={userAge} onChange={handleUserAge}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default UserForm