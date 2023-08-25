import { useState } from 'react'
import './style/index.css'

import Navbar from './component/navbar'
import Footer from './component/Footer'
import Events from './component/Events'

function App() {
  return (
    <>
      <Navbar/>
      <Events/>
      <Footer/>
    </>
  )
}

export default App
