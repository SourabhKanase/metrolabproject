import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Middlecontent from '../components/Middlecontent/Middlecontent'
import Aboutus from '../components/Aboutus/Aboutus'
import Contactus from '../components/Contantus/Contactus'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
         <Navbar/>
         <Middlecontent/>
         <Aboutus/>
         <Contactus/>
         <Footer/>
    </div>
  )
}

export default Home