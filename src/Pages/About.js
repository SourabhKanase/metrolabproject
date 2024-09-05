import React from 'react';
import Card from './../components/Commanbackgroundcard/Card';
import Navbar from '../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer'
import './About.css'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Card text="ABOUT US" />
        <div className='body'>
              <div class="container w-[95%] m-auto">

                  <p className='lg:text-lg md:text-base sm:text-base text-base'>Industrial Automation has been a systems integrator for the past 30 years serving a wide variety of manufacturing clients throughout the Midwest. Through the combined experience of our technical staff and business partners, we can design and build automated control systems that will increase the <span class="highlight">safety</span>, <span class="highlight">quality</span>, <span class="highlight">productivity</span>, and <span class="highlight">efficiency</span> of your operation.</p>

                  <p className='lg:text-lg md:text-base sm:text-base text-base'>No matter how unique your production needs, we are committed to the development of control systems that will reduce your cost of doing business.</p>

                  <p className='lg:text-lg md:text-base sm:text-base text-base'>Today’s ever-changing technology offers new and innovative ways to approach automation and control issues. To take advantage of these new technologies, you need a partner who understands how to apply them to your needs. From concept to production, we are committed to developing, building, and maintaining quality automation systems that assist you in meeting your company’s production goals.</p>

                  <p className='lg:text-lg md:text-base sm:text-base text-base'>Our experience with the following automation solutions can be put to work for your company:</p>
                  
                  <ul className='lg:text-lg md:text-base sm:text-base text-base'>
                      <li>Robotics</li>
                      <li>PLCs</li>
                      <li>Touch screens</li>
                      <li>Machine vision</li>
                      <li>Pneumatic control</li>
                      <li>Hydraulic control</li>
                      <li>Motion control</li>
                      <li>Process control systems</li>
                  </ul>

                  <p className='lg:text-lg md:text-base sm:text-base text-base'>We will reduce downtime & waste, improve quality, increase efficiency and productivity, enhance safety, and reduce energy costs. Current economic conditions dictate that your operation must produce as efficiently and reliably as possible.</p>

                  <p className='lg:text-lg md:text-base sm:text-base text-base'>Industrial Automation works closely with our customers to develop new systems or to cost-effectively enhance the capabilities of existing machines to meet your requirements.</p>
              </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About