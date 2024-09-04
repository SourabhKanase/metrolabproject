import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Card from './../components/Commanbackgroundcard/Card';
import Form from '../components/Form/Form';
import './Contactuspage.css'
import Footer from '../components/Footer/Footer';
const Contactuspage = () => {

  return (
    <div>
        <Navbar/>
        <Card text="CONTACT US"/>
        <div className=' flex lg:flex-row md:flex-row sm:flex-col flex-col justify-between w-[80%] m-auto mt-20'>
       <div className='lg:w-[55%] md:w-[45%] sm:w-[100%] w-full flex flex-col gap-4'>
            <div class="contact-text-container">
                <p className='text-base'>
                    If you are interested in talking to us about a project—or just have some initial questions—simply fill out the form below and we'll contact you by the end of the next business day. We're looking forward to discussing your needs further. Want to get in touch right away? Give us a call at <strong>(608) 781-6878</strong>.
                </p>
                <p className="privacy-note text-base">
                    All information provided is for our use only. We do not share this information with outside parties.
                </p>
            </div>

            <Form/>
       </div>
       <div className='lg:w-[45%] md:w-[45%] sm:w-[100%] w-full flex flex-col gap-4 lg:mt-0 md:mt-0 sm:mt-10 mt-10'>
            <div className="contact-info-container p-6 bg-white ">
                <p><strong className='mr-2'>Email:</strong>info@metrolabautomation.com</p>
                <p><strong>Phone:</strong> (608) 781-6878</p>
                <p><strong>Fax:</strong> (608) 781-8093</p>

                <div>
                    <strong>Mail:</strong>
                    <p>Industrial Automation</p>
                    <p>214 Vine St</p>
                    <p>La Crosse, WI 54601</p>
                </div>
                <div>
                    <strong>24/7 Urgent or Emergency after hours:</strong>
                    <p>Tech Support, Plant Down</p>
                    <p className="emergency-info text-red-600 italic">Our on-call engineer will call you back immediately.</p>
                </div>
            </div>
       </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Contactuspage