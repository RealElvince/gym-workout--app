import React ,{useState}from 'react'
import { useSignUp } from '../hooks/useSignUp'

function SignUp() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {signup,error,isLoading} = useSignUp()
    

    // handleSubmit for sign up

   const handleSubmit = async (e) =>{

      e.preventDefault();
      await signup(email,password);
   }
  return (
    <div>
       <form className='signup-form' onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <label>Email:</label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label>Password:</label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button disabled={isLoading}>Sign Up</button>
          {error && <div className='error'>{error}</div>}
       </form>
    </div>
  )
}

export default SignUp