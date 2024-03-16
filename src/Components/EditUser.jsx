import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import style from "../styles/createuser.module.css";

const EditUser = () => {
    let [name,setName]=useState();
    let [phone,setPhone]=useState();
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();
    let {index}=useParams()
   useEffect(()=>{
        // axios.get(`http://localhost:5000/user/${index}`)
        axios.get(`https://650d386da8b42265ec2bd667.mockapi.io/user/${index}`)
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
        // axios.put(`http://localhost:5000/user/${index}`,payload)
        axios.put(`https://650d386da8b42265ec2bd667.mockapi.io/user/${index}`,payload)
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
    <section id={style.form}>
        <table>
            <tr><th colSpan={2}>Create User</th></tr>
            <tr>
                <td>Name:</td>
                <td><input type="text" placeholder='Enter Your Name'value={name} onChange={(e)=>{setName(e.target.value)}}/></td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td><input type="tel" placeholder='Enter Your Phone Number'value={phone} onChange={(e)=>{setPhone(e.target.value)}}/></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><input type="email" placeholder='Enter Your Email'value={email} onChange={(e)=>{setEmail(e.target.value)}}/></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type="password" placeholder='Enter Your Password'value={password} onChange={(e)=>{setPassword(e.target.value)}}/></td>
            </tr>
            <tr><th colSpan={2}><button type='submit' onClick={formhandel}>Submit</button></th></tr>
        </table>
        {/* <div>
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
        </div> */}
    </section>
  )
}

export default EditUser