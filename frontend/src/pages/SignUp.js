import React ,{useState}from 'react'

function SignUp() {
    const [email,setEmail] = useState('')
    const [password,setPassword] =useState('')

    // handleSubmit for sign up

   const handleSubmit = async (e) =>{

      e.preventDefault()
      console.log(email,password)
   }
  return (
    <div>
       <form className='signup-form' onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <label>Email:</label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label>Password:</label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button>Sign Up</button>
       </form>
    </div>
  )
}

export default SignUp