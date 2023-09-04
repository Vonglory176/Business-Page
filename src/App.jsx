import { useState } from 'react'
import './style/index.css'

import Navbar from './component/navbar'
import Landing from './component/landing'
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
        <Extra/>
        <Footer/>
      </main>
    </>
  )
}

export default App
