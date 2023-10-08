import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext'
const Login = () => {

 const [username,setUsername]= useState('')
 const [Password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

 const handleSubmit = (e)=>{
   e.preventDefault()
   setUser({username,Password})
 }

  return (
    <div>
        <h2>login</h2>
        <input type="text" 
        value={username} onChange={(e)=>setUsername(e.target.value)}
        placeholder='username' id="" />
        {" "}
        <input type="text"
        value={Password} onChange={(e)=>setPassword(e.target.value)}
        placeholder='password' id="" />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login