import React from 'react';
import  { useState, useEffect } from 'react';
import {MenuOutlined,CloseOutlined} from '@ant-design/icons';
import CompanyLogo from './../Assets/CompanyLogo.png';
import location from './../Assets/location.png';
import telephone from './../Assets/telephone.png';
import { NavLink,useLocation } from 'react-router-dom';
import "./Navbar.css"


const Navbar = () => {
  const [divHeight, setDivHeight] = useState(200);
  const [show, setShow] = useState(false);

  let locationpath=useLocation();
  let currentPath=locationpath.pathname;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // When scrolled more than 50px
        setDivHeight(100);         // Set height to 200px
      } else {                     // When scrolled less than 50px (including top)
        setDivHeight(200);         // Set height back to 300px
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  return (
    <div className='Navbar bg-white'>
        <div className={`navone ${divHeight==100 ? "hidden":"block"}  `}>
            <div className="xyz">METROLAB AUTOMATION PVT. LTD.SINCE 1990</div>
        </div>
        {/* <div className='lg:h-[150px]  Navtwo flex lg:justify-between md:justify-between  sm:justify-between  justify-center  w-[90%] m-auto items-center  '> */}
        <div className={`Navtwo   transition-all ease-in  duration-50 flex lg:justify-between md:justify-between sm:justify-between justify-center w-[90%] m-auto items-center ${divHeight === 200 ? 'lg:h-[110px]' : 'lg:h-[80px]'} md:h-fit sm:h-fit h-fit`}>
            <div>
                <img src={CompanyLogo} alt='image not found!' className='h-[92px] w-[200px]' />
            </div>
            
            <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col lg:w-[50%] md:w-[75%] sm:w-[55%]  justify-around'>
                <div className='lg:flex md:flex sm:flex hidden gap-4 items-center p-4 w-[40%] box-border  '>
                  <img className='h-7' src={location} alt='location icon not found'/>
                  <div>
                      <span>
                        PLANT : 29/13,D-Block,MIDC,Chinchwad
                      </span>
                  </div>
                </div>
                <div className='lg:flex md:flex sm:flex hidden gap-4 items-center p-4 w-[40%] box-border '>
                  <img className='h-7' src={telephone} alt='telephone icon not found'/>
                  <div>
                      <span>
                        (608) 781-6878
                        info@metrolabautomation.com
                      </span>
                  </div>
                </div>
            </div>
            <div className='lg:block md:hidden sm:hidden hidden '>
              <button className='btn'>
                REQUEST A QOUTE
              </button>
            </div>
            
        </div>

        <div className='w-full transition-all ease-in  duration-50 bg-black '>
           <div className={`w-[95%] m-auto ${divHeight === 200 ? 'lg:h-[70px]' : 'lg:h-[60px]'} bg-black flex text-white p-4 justify-between items-center`}>
                  <div className='w-[60%] lg:block md:hiddden sm:hidden hidden'>
                   <div className='flex w-full justify-around'>
                    <div className='navthree'>
                      <span><NavLink to="/" className={currentPath ==="/" ? "active" : ""}>HOME</NavLink></span>
                    </div>
                    <div className='navthree'>
                      <span>SERVICES</span>
                    </div>
                    <div className='navthree'>
                      <span>CASE STUDY</span>
                    </div>
                    <div className='navthree'>
                      <span><NavLink to="/about" className={currentPath ==="/about" ? "active" : ""}>ABOUT US</NavLink></span>
                    </div>
                    <div className='navthree'>
                      <span><NavLink to="/contact" className={currentPath ==="/contact" ? "active" : ""}>CONTACT US</NavLink></span>
                    </div>
                  </div>
                  </div>
                  <div className='lg:hidden md:block sm:block block'>
                    <MenuOutlined onClick={()=>{
                      console.log("hello");
                      setShow(!show)
                    }}/>
                  </div>
                  <div className='w-[30%]'>
                    <input className='opacity-40 bg-gray-500 p-2 rounded-md w-full' placeholder='Search'/>
                  </div>
            </div>
        </div>


       {/* Hamburger Menu */}
      {show && (
        <div className='hamburger fixed top-0 left-0  text-white p-4 z-50 lg:hidden md:block sm:block block'>
          <div className='flex flex-col space-y-4'>
            <div className='flex justify-end'><CloseOutlined onClick={()=>setShow(false)} /></div>
            <div className='flex justify-center p-2 border-b border-gray-500 ham'><NavLink to="/" className={currentPath ==="/" ? "active" : ""}>HOME</NavLink></div>
            <div className='flex justify-center p-2 border-b border-gray-500 ham'>SERVICES</div>
            <div className='flex justify-center p-2 border-b border-gray-500 ham'>CASE STUDY</div>
            <div className='flex justify-center p-2 border-b border-gray-500 ham'><NavLink to="/about" className={currentPath ==="/about" ? "active" : ""}>ABOUT US</NavLink></div>
            <div className='flex justify-center p-2 ham'><NavLink to="/contact" className={currentPath ==="/contact" ? "active" : ""}>CONTACT US</NavLink></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar