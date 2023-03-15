import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Profile() {
  return (
    <>
    <ol>
        <Link to="my-profile" style={{textDecoration: "none" }}>My Profile</Link>
        <Link to="friend" style={{ marginLeft: "15px", textDecoration: "none" }}>See Friend Profile</Link>
    </ol>
    <Outlet/>
    </>
  )
}

export default Profile