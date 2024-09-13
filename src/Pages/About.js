// import React from 'react';
// import Card from './../components/Commanbackgroundcard/Card';
// import Navbar from '../components/Navbar/Navbar';
// import Footer from './../components/Footer/Footer'
// import './About.css'

// const About = () => {
//   return (
//     <div>
//         <Navbar/>
//         <Card text="ABOUT US" />
//         <div className='body'>
//               <div class="container w-[95%] m-auto">

//                   <p className='lg:text-lg md:text-base sm:text-base text-base'>Industrial Automation has been a systems integrator for the past 30 years serving a wide variety of manufacturing clients throughout the Midwest. Through the combined experience of our technical staff and business partners, we can design and build automated control systems that will increase the <span class="highlight">safety</span>, <span class="highlight">quality</span>, <span class="highlight">productivity</span>, and <span class="highlight">efficiency</span> of your operation.</p>

//                   <p className='lg:text-lg md:text-base sm:text-base text-base'>No matter how unique your production needs, we are committed to the development of control systems that will reduce your cost of doing business.</p>

//                   <p className='lg:text-lg md:text-base sm:text-base text-base'>Today’s ever-changing technology offers new and innovative ways to approach automation and control issues. To take advantage of these new technologies, you need a partner who understands how to apply them to your needs. From concept to production, we are committed to developing, building, and maintaining quality automation systems that assist you in meeting your company’s production goals.</p>

//                   <p className='lg:text-lg md:text-base sm:text-base text-base'>Our experience with the following automation solutions can be put to work for your company:</p>
                  
//                   <ul className='lg:text-lg md:text-base sm:text-base text-base'>
//                       <li>Robotics</li>
//                       <li>PLCs</li>
//                       <li>Touch screens</li>
//                       <li>Machine vision</li>
//                       <li>Pneumatic control</li>
//                       <li>Hydraulic control</li>
//                       <li>Motion control</li>
//                       <li>Process control systems</li>
//                   </ul>

//                   <p className='lg:text-lg md:text-base sm:text-base text-base'>We will reduce downtime & waste, improve quality, increase efficiency and productivity, enhance safety, and reduce energy costs. Current economic conditions dictate that your operation must produce as efficiently and reliably as possible.</p>

//                   <p className='lg:text-lg md:text-base sm:text-base text-base'>Industrial Automation works closely with our customers to develop new systems or to cost-effectively enhance the capabilities of existing machines to meet your requirements.</p>
//               </div>
//         </div>
//         <Footer/>
//     </div>
//   )
// }

// export default About



import React from 'react';
import Card from './../components/Commanbackgroundcard/Card';
import Navbar from '../components/Navbar/Navbar';
import Footer from './../components/Footer/Footer';
import './About.css';

const About = () => {
  return (
    <div>
      <Navbar />
      <Card text="ABOUT US" />
      <div className="body">
        <div className="container mx-auto w-[100%] lg:w-[85%] md:w-[85%] sm:w-[85%] mt-10 p-4">
          <p className="about-text my-4">
            <span className="highlight">Metrolab Automation Pvt. Ltd.</span> is a pioneering force in the field of engineering, automation, and robotics. Established over 14 years ago, we have consistently pushed the boundaries of innovation, providing comprehensive solutions that empower industries and enhance operational efficiency across the globe. Headquartered in Pune, India, our company is built on a foundation of integrity, dedication, and a relentless pursuit of excellence.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">Our Journey</h2>
          <p className="about-text my-4">
            Founded with a vision to contribute to the industry through sincerity and dedication, Metrolab Automation Pvt. Ltd. has evolved into a trusted partner for businesses worldwide. From humble beginnings, we have expanded our capabilities and offerings to become a leader in automation, robotics, and engineering services.
          </p>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">Our Mission</h2>
          <p className="about-text my-4">
            Our mission is to foster a corporate culture that promotes growth and innovation. We aim to:
          </p>
          <ul className="list-disc pl-5 about-text">
            <li>Establish a dynamic environment that empowers employees to excel and drive the company's success.</li>
            <li>Focus on core technologies and products to continuously enhance our manufacturing capabilities.</li>
            <li>Deliver the highest standards of service through a highly skilled team of field representatives and customer service professionals.</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">What Sets Us Apart</h2>
          <p className="about-text my-4">
            Metrolab Automation Pvt. Ltd. is more than just a company; we are a team of passionate professionals dedicated to making a difference in the world of engineering and automation.
          </p>

          <ul className="list-disc pl-5 about-text my-4">
            <li>Expertise and Experience: With over 14 years of experience, we deliver high-quality engineering and automation solutions.</li>
            <li>Diverse Product Range: From automation solutions to ergonomic lift systems, we provide a variety of products.</li>
            <li>Global Reach and Impact: Our projects span across Europe, North America, Asia, and Africa.</li>
            <li>Commitment to Quality: We are ISO 9001-2015 certified and ECOVADIS CSR Silver Medal 2023 recipients.</li>
            <li>Strategic Partnerships: We collaborate with international partners to deliver seamless global solutions.</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">Our Facilities</h2>
          <p className="about-text my-4">
            Metrolab Automation Pvt. Ltd. operates two state-of-the-art plants in Pune, India.
          </p>
          <ul className="list-disc pl-5 about-text">
            <li>Plant 1: A 6,500 sq. ft. facility dedicated to automation assembly and trials.</li>
            <li>Plant 2: A 14,000 sq. ft. expansion plant under development to meet growing global demand.</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">Our Clients and Projects</h2>
          <p className="about-text my-4">We take pride in our projects across various industries:</p>
          <ul className="list-disc pl-5 about-text">
            <li>Czech Republic – US Welding SPM</li>
            <li>Italy – US Welding SPM, Leak Testing SPM</li>
            <li>South Africa – US Welding SPM, Post Process SPM</li>
            <li>UAE – Aerospace Equipment</li>
            <li>USA – Consumer Product Solutions</li>
            <li>Thailand – Lift Assist Manipulators</li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-800 mt-6">Certifications</h2>
          <p className="about-text my-4">ISO 9001-2015 certified by TUV Austria, ECOVADIS CSR Silver Medal 2023</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
