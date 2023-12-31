import { useState } from 'react'
import './style/index.css'

import Navbar from './component/Navbar'
import Landing from './component/Landing'
import About from './component/About'
import Products from './component/Products'
import Events from './component/Events'
import Extra from './component/Extra'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <Landing/>
        <About/>
        <Products/>
        <Events/>
        {/* <Extra/> */}
      </main>
      <Footer/>
    </>
  )
}

export default App
