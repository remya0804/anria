import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import './App.css'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className="app">

      <Navbar />

      <Home />

      <Footer />


    </div>
  )
}

export default App