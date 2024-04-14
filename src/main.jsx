import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './index.css'
import Header from "./components/Header.jsx"
import Proyects from "./components/Proyects.jsx"
import AboutMe from "./components/AboutMe.jsx"
import Skills from "./components/Skills.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path='/'element={<AboutMe/>}/>
        <Route path='/proyects'element={<Proyects/>}/>
        <Route path='/skills'element={<Skills/>}/>
      </Routes>
    </Router>
    
  </React.StrictMode>,
  
)
