import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProfiency'
import AboutMe from './sections/AboutMe'
import MyProjects from './sections/MyProjects'
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <MyProjects />
      <ContactMe/>
      <Footer className='mt-auto'/>
    </div>
  )
}

export default App