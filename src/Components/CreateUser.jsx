import axios from 'axios';
import React, { useState } from 'react'

const CreateUser = () => {
    let [name,setName]=useState();
    let [phone,setPhone]=useState();
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();
    let formhandel=(e)=>{
        e.preventDefault()
        let payload={name,phone,email,password}
        axios.post("http://localhost:3000/user",payload)
        .then(()=>{
            alert("Your data Has been added");
            console.log("Data Added succesfully");

        })
        .catch((err)=>{
            console.log(err);
        })
     }

  return (
    <section>
        <div>
            <form action="">
                <h2>Create User</h2>
                <label htmlFor="">Name:</label>
                <input type="text" placeholder='Enter Your Name' onChange={(e)=>{setName(e.target.value)}}/><br />
                <label htmlFor="">Phone:</label>
                <input type="tel" placeholder='Enter Your Phone Number' onChange={(e)=>{setPhone(e.target.value)}}/><br />
                <label htmlFor="">Email:</label>
                <input type="email" placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}}/><br />
                <label htmlFor="">Password:</label>
                <input type="password" placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}}/><br />
                <button type='submit' onClick={formhandel}>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default CreateUser