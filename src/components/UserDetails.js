import React from 'react'
import { useParams } from 'react-router-dom'


function UserDetails() {

  const { userId } = useParams()
  // console.log(userId)

  return (
    <h3 style={{color:"green", margin:"20px 0 0"}}>User {userId} Details Page</h3>
  )
}

export default UserDetails