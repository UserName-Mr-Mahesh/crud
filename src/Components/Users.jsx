import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from "../styles/createuser.module.css";
import style1 from "../styles/user.module.css";
const Users = () => {
    let [data,setData]=useState([])
     useEffect(()=>{
        // axios.get("http://localhost:5000/user")
        axios.get("https://650d386da8b42265ec2bd667.mockapi.io/user")
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]
    )

    let deleteData=(id)=>{
        // axios.delete(`http://localhost:5000/user/${id}`)
        axios.delete(`https://650d386da8b42265ec2bd667.mockapi.io/user/${id}`)
        window.location.assign("/")
    }
  return (
    <section id={style.form}>
        {data.map((x)=>{
            return (
                <div id={style1.profile}>
                    <h1>User {x.id}</h1>
                    <h1>{x.name}</h1>
                    <h2>{x.phone}</h2>
                    <h3>{x.email}</h3>
                    <button><Link to={`/edituser/${x.id}`}>Edit</Link></button>    <button onClick={()=>{deleteData(x.id)}}>Delete</button><br />
                </div>
            )
        })}
    </section>
  )
}

export default Users