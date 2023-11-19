import axios from 'axios';
import React, { useState } from 'react';
import style from "../styles/createuser.module.css";
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
    <section id={style.form}>
        <table>
            <tr><th colSpan={2}>Create User</th></tr>
            <tr>
                <td>Name:</td>
                <td><input type="text" placeholder='Enter Your Name' onChange={(e)=>{setName(e.target.value)}}/></td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td><input type="tel" placeholder='Enter Your Phone Number' onChange={(e)=>{setPhone(e.target.value)}}/></td>
            </tr>
            <tr>
                <td>Email:</td>
                <td><input type="email" placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}}/></td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type="password" placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}}/></td>
            </tr>
            <tr><th colSpan={2}><button type='submit'  onClick={formhandel}>Submit</button></th></tr>
        </table>
    </section>
  )
}

export default CreateUser