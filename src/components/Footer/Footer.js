import React from 'react'
import company from './../Assets/CompanyLogo.png'
import { EnvironmentFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import './Footer.css';
const Footer = () => {
  return (
    <div className='bgimage w-full h-fit mt-10 '>
        <div className='insidediv h-fit p-6'>
                <div className='flex lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] gap-4 m-auto  flex-wrap justify-center '>

                    <div className='lg:w-[250px] md:w-full sm:w-full w-full h-fit flex flex-col justify-center items-center'>
                       <div className='companylogo'>
                        <img src={company} alt='companylogo'/>
                       </div>
                       <div className='text-center'>
                         We are committed to developing a custom automation and controls solution that will meet and exceed your expectations.
                       </div>
                    </div>

                    <div className='lg:w-[250px] md:w-full sm:w-full w-full h-fit flex flex-col gap-3'>
                        <span className='spantag'>Our Services</span>
                        <span className='dash w-[15%]'></span>
                        <div >
                            <div className='contentbelowspan'>Industrial controls</div>
                            <div className='contentbelowspan'>System automation</div>
                            <div className='contentbelowspan'>Maintenance and Repair</div>
                        </div>
                    </div>

                    <div className='lg:w-[250px] md:w-full sm:w-full w-full h-fit flex flex-col gap-3'>
                        <span className='spantag'>Quick Links</span>
                        <span className='dash w-[15%]'></span>
                        <div >
                            <div className='contentbelowspan'>Home </div>
                            <div className='contentbelowspan'>Services</div>
                            <div className='contentbelowspan'>Contact Us</div>
                            <div className='contentbelowspan'>About us</div>
                        </div>
                    </div>


                    <div className='lg:w-[250px] md:w-full sm:w-full w-full flex flex-col gap-3'>
                        <span className='spantag'>Get In Touch</span>
                        <span className='dash w-[15%]'></span>
                        <div >
                            <div className='contentbelowspan'><EnvironmentFilled className='mr-2 icons'/>PLANT : 29/13,D-Block,MIDC,Chinchwad ,Pune(MH) 411019 India</div>
                            <div className='contentbelowspan'><PhoneFilled className='mr-2 icons'/>+91 9561512175</div>
                            <div className='contentbelowspan'><MailFilled className='mr-2 icons'/>info@metrolabautomation.com</div>
                        </div>
                    </div>
                </div>
                <div className='h-[200px]'>

                </div>
        </div>
    </div>
  )
}

export default Footer