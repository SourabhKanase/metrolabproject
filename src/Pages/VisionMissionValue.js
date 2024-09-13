import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Card from './../components/Commanbackgroundcard/Card';
import './VisionMissionValue.css';

const VisionMissionValue = () => {
  return (
    <div>
      <Navbar />
      <Card text="VISION MISSION VALUES" />
      <div className='body lg:w-[85%] md:w-[85%] sm:w-[85%] w-[90%] m-auto mt-10'>
        
        <section className="vision-section mb-10">
          <h2 className="section-title  mb-4 text-gray-500 uppercase"> Vision</h2>
          <p className="section-text text-sm lg:text-base text-gray-700">
            To empower our customers through sincerity, dedication, and a commitment to coexistence and growth in both the Indian and international markets.
          </p>
        </section>

        <section className="mission-section mb-10">
          <h2 className="section-title   mb-4 text-gray-500  uppercase"> Mission</h2>
          <ul className="mission-list list-disc pl-5 text-sm lg:text-base text-gray-700">
            <li className="mb-2">Creating a thriving corporate environment that empowers employees to drive growth.</li>
            <li className="mb-2">Enhancing our manufacturing capabilities by focusing on core technologies and core products.</li>
            <li>Delivering unparalleled service standards through our highly trained field representatives and customer service teams.</li>
          </ul>
        </section>

        <section className="values-section">
          <h2 className="section-title   mb-4 text-gray-500 uppercase"> Values</h2>
          <p className="section-text text-sm lg:text-base text-gray-700">
            Metrolab Automation Pvt. Ltd. stands for quality, integrity, and continuous improvement. We are dedicated to providing exceptional engineering and automation solutions by upholding the highest standards in safety, performance, and customer satisfaction.
          </p>
          <p className="section-text text-sm lg:text-base text-gray-700 mt-4">
            Our commitment to ethical practices and sustainable development drives us to innovate responsibly while fostering a culture of trust and excellence.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default VisionMissionValue;
