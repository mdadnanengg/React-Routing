import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function MyProfile() {
  return (
    <>
    <Link to="details" style={{ textDecoration: "none", listStyle:"none"}}><li>See Details Profile</li></Link>
    <Link to="shorter" style={{ textDecoration: "none", listStyle:"none"}}><li>See Shorter Profile</li></Link>
    <Outlet/>
    </>
  )
}

export default MyProfile