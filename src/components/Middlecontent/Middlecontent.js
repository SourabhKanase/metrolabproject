import React from 'react';
import image1 from './../Assets/image1.jpg'
import image2 from './../Assets/image2.jpg'
import image3 from "./../Assets/image3.jpg"
import './Middlecontent.css'
const Middlecontent = () => {
  return (
    <div className='bg-[#F5F4F4]'>
        <div>
            <div className='banner'>
                <div className='w-full h-full contentdiv p-10 flex'>
                    <div className='lg:w-[35%] md:full sm:w-full w-full mt-36  '>
                         <div className='title'>
                             AUTOMATION & CONTROL EXPERTS
                         </div>
                         <div className='text'>
                            We design and engineer custom-automated control solutions that reduce your costs and give your business the competitive edge it needs to succeed.
                         </div>
                         <button className='btn1'>LEARN MORE</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-[#F5F4F4]'>
        <div className=' flex lg:flex-row md:flex-row sm:flex-col flex-col  gap-6 w-[90%] m-auto mt-10'>
            <div className='service  w-[20%] lg:block md:block sm:hidden hidden  p-6'>
                    OUR<br/>
                    SERVICES  
            </div>
            <div className=' w-[100%] service2 lg:hidden md:hidden sm:block block  p-6'>
                    OUR SERVICES  
            </div>
            <div className='textx'>
               From concept to production, we are committed to developing, building and maintaining quality automation systems that help you reach your goals. Whether your aim is reduced downtime, improved quality, increased efficiency and productivity, enhanced safety, or reduced energy costs, we’re here to help with professional service and expertise you can rely on.
            </div>
        </div>
        

        <div className='w-[90%] m-auto flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between items-center mt-6'>
            <div className='lg:w-[32%] md:w-[32%] sm:w-[32%] w-[100%] '>
               <div>
                    <img src={image1} loading="lazy" className='w-full h-full' alt='three'/>
               </div>
               <div className='mt-3'>
                   <div className='cardtitle uppercase'>
                   FR Bumper Punching spm
                   </div>
                   <div className='cardtext'>
                     <div>Integrate single machine visibility or all facets of your manufacturing and control system.</div>
                     <div className='mt-4 readmore'>READ MORE...</div>
                   </div>
               </div>
            </div>
            <div className='lg:w-[32%] md:w-[32%] sm:w-[32%] w-[100%] '>
               <div>
                    <img src={image2} loading="lazy" className='w-full h-full' alt='one'/>
               </div>
               <div className='mt-3'>
                   <div className='cardtitle uppercase'>
                    RAP CAP BOX POST process spm
                   </div>
                   <div className='cardtext'>
                     <div>Integrate single machine visibility or all facets of your manufacturing and control system.</div>
                     <div className='mt-4 readmore'>READ MORE...</div>
                   </div>
               </div>
            </div>
            <div className='lg:w-[32%] md:w-[32%] sm:w-[32%] w-[100%] '>
               <div>
                    <img src={image3} loading="lazy" className='w-full h-full' alt='two'/>
               </div>
               <div className='mt-3'>
                   <div className='cardtitle uppercase'>
                     SPORTS HOOP multihead spm
                   </div>
                   <div className='cardtext'>
                     <div>Integrate single machine visibility or all facets of your manufacturing and control system.</div>
                     <div className='mt-4 readmore'>READ MORE...</div>
                   </div>
               </div>
            </div>
        </div>
        <div className='flex items-center justify-center mt-8'>
            <button className='btn2 mb-8'>VIEW ALL SERVICES</button>
        </div>
        </div>
    </div>
  )
}

export default Middlecontent