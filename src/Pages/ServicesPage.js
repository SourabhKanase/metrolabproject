import React from 'react';
import Navbar from './../components/Navbar/Navbar';
import Card from './../components/Commanbackgroundcard/Card'
import Footer from './../components/Footer/Footer';
import ServicesContent from './../components/ServicesContent/ServicesContent';

const ServicesPage = () => {
  return (
    <div>
        <Navbar/>
        <Card text=" SERVICES"/>
         <ServicesContent/>
        <Footer/>
    </div>
  )
}

export default ServicesPage