
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Body from './pages/body/Body.jsx'
import About from './pages/about/About.jsx'
import Dynamic from './pages/dynamic/Dynamic.jsx'
import Frontend from './pages/frontend/Frontend.jsx'

createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route index element={<Body />} />
          
      
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/ui_ux" element={<Dynamic />} />
        <Route path="/frontend" element={<Frontend />} />
        

      </Routes>
    </BrowserRouter>,
)


//    <Route path="/backend" element={<Dynamic />} />