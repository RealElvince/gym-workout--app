import React ,{useState}from 'react'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] =useState('')

    // handleSubmit for login

   const handleSubmit = async (e) =>{

      e.preventDefault()
      console.log(email,password)
   }
  return (
    <div>
       <form className='login-form' onSubmit={handleSubmit}>
          <h3>Login</h3>
          <label>Email:</label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label>Password:</label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button>Log in</button>
       </form>
    </div>
  )
}

export default Login