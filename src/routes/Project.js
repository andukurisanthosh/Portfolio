import React from 'react'
import Nav from '../components/Navbar/Nav'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Work from '../components/WorkCard/work'

function Project() {
  return (
    <div>
      <Nav />
      <Hero heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project