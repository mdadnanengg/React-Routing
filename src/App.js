import './App.css';
import {Routes, Route} from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import Home from './components/pages/home/Home';
import About from './components/pages/about/About';
import Contact from "./components/pages/contact/Contact"


function App() {
  return (
    <div className='App'>
      <NavigationBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='about' element={<About/>}/>

      <Route path='contact' element={<Contact/>}/>

      {/* <Route path='abc' element={<h1>abc page</h1>}/> */}
    </Routes>
    </div>
  );
}

export default App;
