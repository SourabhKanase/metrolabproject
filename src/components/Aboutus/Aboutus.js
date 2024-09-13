import React from 'react';
import targetimage from "./../Assets/target (1).png";
import visionimage from './../Assets/graph.png';
import valuesimage from './../Assets/diamond.png';
import { NavLink } from 'react-router-dom';
import './Aboutus.css'
const Aboutus = () => {
  return (
    <div>
        <div className='w-full'>
             <div className='flex flex-col justify-center items-center mt-10 lg:w-[65%] md:w-[70%] sm:w-[90%] w-[95%] m-auto box-border'>
                  <div className='aboutustittle mb-6'>About Us</div>
                  <div className='abouttext'>
                         Industrial Automation has been a systems integrator for the past 15+ years, serving a wide variety of manufacturing clients throughout the Midwest. Through the combined experience of our technical staff and business partners we can design and build automated control systems that will increase the safety, quality, productivity, and efficiency of your operation. What's more, we are guided by our Mission, Vision, and Values in how we conduct business and treat our customers and colleagues.
                  </div>
             </div>
             <div className='flex lg:flex-row md:flex-row sm:flex-row flex-col justify-center items-center mt-10'>
              <div className='lg:w-[15%] md:w-[25%] sm:w-[30%] w-[50%] flex flex-col gap-5 lg:border-r-2 md:border-r-2 sm:border-r-2 border-r-0 border-gray justify-center items-center '>
                 <img src={targetimage} className='w-[100px] h-[100px]' alt='mission img'/>
                 <div className='abc'>MISSION</div>
              </div>
              <div className='lg:w-[15%] md:w-[25%] sm:w-[30%] w-[50%] flex flex-col gap-5 lg:border-r-2 md:border-r-2 sm:border-r-2 border-r-0  border-gray justify-center items-center'>
                 <img src={visionimage} className='w-[100px] h-[100px]' alt='mission img'/>
                 <div className='abc'>VISION</div>
              </div>
              <div className='lg:w-[15%] md:w-[25%] sm:w-[30%] w-[50%] flex flex-col gap-5 justify-center items-center'>
                 <img src={valuesimage} className='w-[100px] h-[100px]' alt='mission img'/>
                 <div className='abc'>VAlUES</div>
              </div>
             </div>
             <div className='flex items-center justify-center mt-10'>
               <button className='btn1'><NavLink to="/visionmissionvalues" >READ MORE</NavLink></button>
             </div>
        </div>
    </div>
  )
}

export default Aboutus