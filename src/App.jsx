import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Section1 from './Component/Section-one/Section1'
import Section2 from './Component/Section-two/Section2'
import Section3 from './Component/Section-three/Section3'

import './index.css'
import Footer from './Component/Footer/Footer'
import Contact from './Component/Contact Me/Contact'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Contact/>
      <Footer/>
    </div>
  )
}
