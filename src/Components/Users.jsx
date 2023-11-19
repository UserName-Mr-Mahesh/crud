import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Users = () => {
    let [data,setData]=useState([])
     useEffect(()=>{
        axios.get("http://localhost:3000/user")
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[]
    )

    let deleteData=(id)=>{
        axios.delete(`http://localhost:3000/user/${id}`)
        window.location.assign("/")
    }
  return (
    <section>
        {data.map((x)=>{
            return (
                <div>
                    <h1>User {x.id}</h1>
                    <h1>{x.name}</h1>
                    <h2>{x.phone}</h2>
                    <h3>{x.email}</h3>
                    <button><Link to={`/edituser/${x.id}`}>Edit</Link></button><br />
                    <button onClick={()=>{deleteData(x.id)}}>Delete</button><br />
                </div>
            )
        })}
    </section>
  )
}

export default Users