import { useState } from 'react'
import './style/index.css'

import Navbar from './component/navbar'
import Landing from './component/landing'
import About from './component/About'
import Events from './component/Events'
import Products from './component/Products'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <About/>
      <Products/>
      <Events/>
      <Footer/>
    </>
  )
}

export default App
