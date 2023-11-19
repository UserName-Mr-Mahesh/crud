import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditUser = () => {
    let [name,setName]=useState();
    let [phone,setPhone]=useState();
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();
    let {index}=useParams()
   useEffect(()=>{
        axios.get(`http://localhost:3000/user/${index}`)
        .then((res)=>{
            setName(res.data.name)
            setPhone(res.data.phone)
            setEmail(res.data.email)
            setPassword(res.data.password)
        })
    },[])
    
    let formhandel=(e)=>{
        e.preventDefault()
        let payload={name,phone,email,password}
        axios.put(`http://localhost:3000/user/${index}`,payload)
        .then(()=>{
            alert("Your data Has updated succesfully");
            console.log("Data updated succesfully");
            window.location.assign("/users")

        })
        .catch((err)=>{
            console.log(err);
        })
     }
  return (
    <section>
        <div>
        <form action="">
                <h2>Edit User</h2>
                <label htmlFor="">Name:</label>
                <input type="text" placeholder='Enter Your Name'value={name} onChange={(e)=>{setName(e.target.value)}}/><br />
                <label htmlFor="">Phone:</label>
                <input type="tel" placeholder='Enter Your Phone Number'value={phone} onChange={(e)=>{setPhone(e.target.value)}}/><br />
                <label htmlFor="">Email:</label>
                <input type="email" placeholder='Enter Your Email'value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br />
                <label htmlFor="">Password:</label>
                <input type="password" placeholder='Enter Your Password'value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br />
                <button type='submit' onClick={formhandel}>Submit</button>
            </form>
        </div>
    </section>
  )
}

export default EditUser