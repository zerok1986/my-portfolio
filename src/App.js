import React from 'react'
import Navbar from './components/layout/Navbar'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Skills from './components/pages/Skills'
import Contact from './components/pages/Contact'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
