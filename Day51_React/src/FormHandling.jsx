import React, { useState } from 'react'

const FormHandling = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword ]=useState("")
  return (
    <>
    <div className="container">
        <h1> Form Handling</h1>

    Name :- <input type="text" />
        <br />
        <br />
        gmail:- <input type="text" />
        <br />
        <br />
        password:- <input type="password" />

    </div>
    </>
  )
}

export default FormHandling