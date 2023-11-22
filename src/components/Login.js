import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const [userId,setUserId] = useState();
    
    const handleclick = ()=>{
        if (userId==="admin12#"){
            localStorage.setItem("Role","admin");
            

        }
        else{
            localStorage.setItem("Role","Member");
        }
        localStorage.setItem("userId",`${userId}`);
        navigate('/home')
 
    }
  return (
    <div>
        <div className='loginForm'>
            <p>User Id</p>
            <input type='text' onChange={(e)=>setUserId(e.target.value)} />
            <button onClick={handleclick}>Login</button>
            <h3>!! for admin login user admin12# as admin ID</h3>
        </div>
       
    </div>
  )
}

export default Login