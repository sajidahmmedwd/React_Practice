import React, { useState } from 'react'

const SubmitForm = () => {

    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    console.log(text);
    console.log(email);
    console.log(password);
    
    

    const submitForm = (event) => {
        event.preventDefault();
        console.log(event.target.text.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        
    }

    const nameInput = (event) => {
        setText(event.target.value)
        
    }

    const emailInput = (event) => {
        setEmail(event.target.value)
    }

    const passwordInput = (event) => {
        setPassword(event.target.value)
    }

  return (
    <div>
        <form onSubmit={submitForm} action="">
            <input onChange={nameInput} type="text" name='text'/><br />
            <input onChange={emailInput} type="email" name='email' /><br />
            <input onChange={passwordInput} type="password" name='password' /><br />

            <input type="submit" name='Submit'/>
        </form>
    </div>
  )
}

export default SubmitForm