import React from 'react'
import Nav from '../components/Navbar/Nav'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import AboutContent from '../components/AboutContent/AboutContent'

function About() {
  return (
    <div>
      <Nav />
      <Hero heading="ABOUT." text="I'm a MERN Stack Developer" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About