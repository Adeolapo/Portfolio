import React,{ useContext, useState,useRef, useEffect } from 'react'
import StarBackground from './component/background/StarBackground'
import Nav from './component/nav/Nav'
import Home from './pages/home/Home'
import Body from './pages/body/Body'
import './App.css'
import { MyContext } from '../Context'
import Onboard from './pages/onboard/Onboard'
import New from './pages/new/New'


function App() {
 //const MyContext = useContext("");
 const robotRef = useRef(null);
 const backgroundRef = useRef(null);
 const [link,setLink] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000); // ⏱️ splash lasts for 9 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
  
      <MyContext value={{robotRef,backgroundRef,link,setLink}} >
        
         <Nav />
        
        <Body />
      </MyContext>
  
    </div>
  )
}

export default App
