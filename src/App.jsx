import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProfiency'
import AboutMe from './sections/AboutMe'
import MyProjects from './sections/MyProjects'

const App = () => {
  return (
    <div className='mb-80'>
      <Navbar />
      <Hero />
      <TechnicalProficiency />
      <AboutMe />
      <MyProjects />
    </div>
  )
}

export default App