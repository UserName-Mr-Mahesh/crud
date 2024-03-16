import axios from 'axios';
import React, { useState } from 'react';
import style from "../styles/createuser.module.css";
import { useNavigate } from 'react-router-dom';
const CreateUser = () => {
    let [name,setName]=useState();
    let [phone,setPhone]=useState();
    let [email,setEmail]=useState();
    let [password,setPassword]=useState();
    let navigate = useNavigate();
    let formhandel=(e)=>{
        // e.preventDefault()
        let payload={name,phone,email,password}
        if(!name || !phone || !email || !password){
            alert("Your data Has not enterd");
        }
        else{
            // axios.post("http://localhost:5000/user",payload)
            axios.post("https://650d386da8b42265ec2bd667.mockapi.io/user",payload)
            .then(()=>{
                alert("Your data Has been added");
                console.log("Data Added succesfully");
                navigate("/users")

            })
            .catch((err)=>{
                console.log(err);
            })
        }
     }

  return (
    <section id={style.form}>
        <table>
            <tr><th colSpan={2}>User Details</th></tr>
            <tr>
                <td><i class="fa fa-user" aria-hidden="true"></i></td>
                <td><input type="text" placeholder='Enter Your Name' onChange={(e)=>{setName(e.target.value)}}/></td>
            </tr>
            <tr>
                <td><i class="fa fa-phone" aria-hidden="true"></i></td>
                <td><input type="tel" placeholder='Enter Your Phone Number' onChange={(e)=>{setPhone(e.target.value)}}/></td>
            </tr>
            <tr>
                <td><i class="fa fa-envelope" aria-hidden="true"></i></td>
                <td><input type="email" placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value)}}/></td>
            </tr>
            <tr>
                <td><i class="fa fa-lock" aria-hidden="true"></i></td>
                <td><input type="password" placeholder='Enter Your Password' onChange={(e)=>{setPassword(e.target.value)}}/></td>
            </tr>
            <tr><th colSpan={2}><button type='submit'  onClick={formhandel}>Submit</button></th></tr>
        </table>
    </section>
  )
}

export default CreateUser