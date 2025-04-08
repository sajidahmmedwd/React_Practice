import React, { useState } from 'react'

const SubmitForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('');
   
    

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if(pass.length < 8) {
            setError("Password must be 8 characters");
        }
        else{
            setError("");
            console.log(name);
            console.log(email);
            console.log(pass);
        
        }
    }

    

  return (
    <div>
        <form onSubmit={handleSubmitForm}>
            <input onChange={(e) => {setName(e.target.value)}} type="text" name='text' placeholder='user name'/><br />
            <input onChange={(e) => {setEmail(e.target.value)}} type="email" name='email' placeholder='email'/><br />
            <input onChange={(e) => {setPass(e.target.value)}} type="password" name='password' placeholder='password'/><br />
            <small>{error}</small> <br />
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default SubmitForm