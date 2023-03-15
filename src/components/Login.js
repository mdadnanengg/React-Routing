function Login({handleLogin}) {

  //  console.log(login)

  return (
    <>
    <h1>Welcome to Login</h1>
    <input type='text'></input>
    <button style={{marginLeft:"15px"}} onClick={handleLogin}>Login</button>
    </>
  )
}

export default Login