import React, { useState } from 'react'
import Form from '../Form/Form'
import {PlusOutlined,MinusOutlined }from '@ant-design/icons'
import './contactus.css'

const Contactus = () => {
  let [whyautomation,setwhyautomation]=useState(false);
  let [whyautomationtwo,setwhyautomationtwo]=useState(false);
  let [whyautomationthree,setwhyautomationthree]=useState(false);
  return (
    <div className='flex lg:flex-row md:flex-row sm:flex-col flex-col justify-between w-[80%] m-auto mt-20 '>
       <div className='lg:w-[45%] md:w-[45%] sm:w-[100%] w-full flex flex-col gap-4'>
         <span className='contacttittle pb-2 w-fit'>CONTACT US</span>
         <Form/>
       </div>
       <div className='lg:w-[45%] md:w-[45%] sm:w-[100%] w-full flex flex-col gap-4 lg:mt-0 md:mt-0 sm:mt-10 mt-10  '>
         <span className='contacttittle pb-2 w-fit'>FAQS</span>
         <div className='w-[100%] h-fit flex flex-col gap-4 '>
          <div className='flex flex-col gap-4 p-4  border-gray-200 border-2  h-fit '>
            <div className='flex justify-between'>
              <span className='redtext question'>Why Atomation ?</span>
              <div>
                {!whyautomation && (<PlusOutlined className='redtext' onClick={()=>setwhyautomation(!whyautomation)} />)}
                {whyautomation && (<MinusOutlined className='redtext' onClick={()=>setwhyautomation(!whyautomation)}/>)}
              </div>
            </div>
            {
              whyautomation && (
                <div>
                <ul>
                  <li className='answer'>Reduce Downtime</li>
                  <li className='answer'>Improve Quality</li>
                  <li className='answer'>Increase Efficiency</li>
                  <li className='answer'>Improved Safety</li>
                  <li className='answer'>Reduced Energy Costs</li>
                  <li className='answer'>Increased Productivity</li>
                </ul>
               </div>)
            }
          </div>
          <div className='flex flex-col gap-4 p-4 border-gray-200 border-2 h-fit '>
            <div className='flex justify-between'>
              <span className='redtext question'>What is Automation ?</span>
              <div>
                {!whyautomationtwo && (<PlusOutlined className='redtext' onClick={()=>setwhyautomationtwo(!whyautomationtwo)} />)}
                {whyautomationtwo && (<MinusOutlined className='redtext' onClick={()=>setwhyautomationtwo(!whyautomationtwo)}/>)}
              </div>
            </div>
            {
              whyautomationtwo && (
                <div className='answer'>
                Supervisory Control And Data Acquisition (SCADA) is a control system architecture comprising: PLC’s, Ethernet capable control equipment, computers, smart devices, databases, networked data communications and graphical user interfaces (GUI) for high-level process supervisory management to interface with an entire plant, process, or individual machine.
               </div>)
            }
          </div>
          <div className='flex flex-col gap-4 p-4 border-gray-200 border-2  h-fit '>
            <div className='flex justify-between'>
              <span className='redtext question'>When should I consider upgrading my automation equipment?</span>
              <div>
                {!whyautomationthree && (<PlusOutlined className='redtext' onClick={()=>setwhyautomationthree(!whyautomationthree)} />)}
                {whyautomationthree && (<MinusOutlined className='redtext' onClick={()=>setwhyautomationthree(!whyautomationthree)}/>)}
              </div>
            </div>
            {
              whyautomationthree && (
                <div className='text-gray-500 answer'>
                  If you have critical control and automation equipment that has components that are no longer available or the software that is running your equipment has an operating system that is no longer supported, it maybe time to consider an upgrade.
               </div>)
            }
          </div>
         </div>
       </div>
    </div>
  )
}

export default Contactus