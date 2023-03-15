import React from 'react'
import { Link } from 'react-router-dom'

function Users() {
  return (
    <>
    <ol>
        <Link to='/user/1' style={{ textDecoration: "none", listStyle:"none"}}><li>user 1</li></Link>
        <Link to='/user/2' style={{ textDecoration: "none", listStyle:"none"}}><li>user 2</li></Link>
        <Link to='/user/3' style={{ textDecoration: "none", listStyle:"none"}}><li>user 3</li></Link>
        <Link to='/user/4' style={{ textDecoration: "none", listStyle:"none"}}><li>user 4</li></Link>
        <Link to='/user/5' style={{ textDecoration: "none", listStyle:"none"}}><li>user 5</li></Link>
        <Link to='/user/6' style={{ textDecoration: "none", listStyle:"none"}}><li>user 6</li></Link>
        <Link to='/user/7' style={{ textDecoration: "none", listStyle:"none"}}><li>user 7</li></Link>
        <Link to='/user/8' style={{ textDecoration: "none", listStyle:"none"}}><li>user 8</li></Link>
        <Link to='/user/9' style={{ textDecoration: "none", listStyle:"none"}}><li>user 9</li></Link>
        <Link to='/user/10' style={{ textDecoration: "none", listStyle:"none"}}><li>user 10</li></Link>
    </ol>
    </>
  )
}

export default Users