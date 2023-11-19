import React from 'react'
import style from "../styles/nav.module.css"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <section id={style.nav}>
        <div><Link to="/">CreateUser</Link> </div>
        <div><Link to="/users">Users</Link></div>
    </section>
  )
}

export default Nav