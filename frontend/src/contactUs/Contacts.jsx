import React from 'react'
import ContactUs from '../components/ContactUs'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contacts = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <ContactUs />
      </div>
      
      <Footer />
    </div>
  )
}

export default Contacts
