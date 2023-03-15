import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from "./components/pages/contact/Contact"
import Profile from './components/pages/profile/Profile';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import MyProfile from './components/MyProfile';
import Login from './components/Login';
import { useState } from 'react';
import Protected from './components/Protected';


function App() {

  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate("/")
    setIsLogin(true)
  }

  const handleLogout = () => {
    navigate("/login")
    setIsLogin(false)

  }

  // console.log(isLogin)

  return (
    <div className='App'>
      <NavigationBar isLogin={isLogin} handleLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='about' element={<About />} />

        <Route path='contact' element={<Contact />} />

        <Route path='profile' element={<Protected isLogin={isLogin} Component={Profile} />} >
          {/* <Route index element={<h1>My Own Profile</h1>} /> */}
          <Route path='my-profile' element={<MyProfile />}>
            {/* <Route index element={<h1>ABC Profile</h1>} /> */}
            <Route path='details' element={<h1>Details Profile Page</h1>} />
            <Route path='shorter' element={<h1>Shorter Profile Page</h1>} />
          </Route>
          <Route path='friend' element={<h1>Friend Profile</h1>} />
        </Route>

        <Route path="users" element={<Protected isLogin={isLogin} Component={Users} />} />

        <Route path='user/:userId' element={<UserDetails />} />

        <Route path='login' element={<Login handleLogin={handleLogin} />} />



        <Route path='*' element={<h1>404 Page Not Found</h1>} />

      </Routes>
    </div>
  );
}

export default App;
