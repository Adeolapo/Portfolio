import React,{ useContext, useState,useRef } from 'react'
import StarBackground from './component/background/StarBackground'
import Nav from './component/nav/Nav'
import Home from './pages/home/Home'
import Body from './pages/body/Body'
import './App.css'
import { MyContext } from '../Context'

function App() {
 //const MyContext = useContext("");
 const robotRef = useRef(null);
 const backgroundRef = useRef(null);
 const [link,setLink] = useState("");

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
