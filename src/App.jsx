import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Course from './pages/Course'
import Footer from './components/Footer/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
const App = () => {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/course' element={<Course/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
