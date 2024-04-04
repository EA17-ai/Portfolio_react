import React from 'react'
import Head from './components/Home/Head'
import { Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Technical from './pages/Technical'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element=<Head/>/>
      <Route path='/contact' element=<Contact/>/>
      <Route path='/education' element=<Education/>/>
      <Route path='/projects' element=<Projects/>/>
      <Route path='/techinfo' element=<Technical/> />
    </Routes>
    
    </div>
  )
}

export default App
