import { useState } from "react";
import "./Message.css";

const Message = (props) => {
    const [isValid,setIsValid] = useState(true);
  return (
    <>
    {
        isValid&&(<div className='message'>
        <p>{props.messagedata}</p>
        <button onClick={props.onConfirm}>okay</button>
    </div>)
    }
        
    </>
  )
}

export default Message