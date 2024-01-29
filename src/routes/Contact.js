import React from 'react'
import Nav from '../components/Navbar/Nav'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import ContactForm from '../components/ContactForm/ContactForm'

function Contact() {
  return (
    <div>
      <Nav />
      <Hero heading="CONTACT." text="Let's have a chat" />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact