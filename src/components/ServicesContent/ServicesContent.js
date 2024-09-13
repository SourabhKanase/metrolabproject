// import React from 'react';
// import certificate1 from './../Assets/certificate1.png'
// import certificate2 from './../Assets/certificate2.png'
// import certificate3 from './../Assets/certificate3.png'
// import './ServicesContent.css';

// const ServicesContent = () => {
//   return (
//     <div>
//       <div className="container mx-auto w-[90%] lg:w-[85%] md:w-[85%] sm:w-[85%] mt-10">
//         {/* Certifications Section */}
//         <section className="certifications-section my-10">
//           <h2 className="text-2xl font-bold text-blue-600 mb-4">Certifications</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6 ">
//             <div className="certification-item">
//               <img
//                 src={certificate1}
//                 alt="Certificate 1"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <div className="certification-item">
//               <img
//                 src={certificate2}
//                 alt="Certificate 2"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//             <div className="certification-item">
//               <img
//                 src={certificate3}
//                 alt="Certificate 3"
//                 className="w-full h-auto object-cover"
//               />
//             </div>
//           </div>
//         </section>

//         {/* Global Export Projects & Services */}
//         <section className="projects-section my-10">
//           <h2 className="text-2xl font-bold text-blue-600 mb-4">Global Export Projects & Services</h2>
//           <ul className="project-list text-gray-700">
//             <li className="mb-2">Czech Republic – US Welding SPM (MATE, Prague)</li>
//             <li className="mb-2">Italy – US Welding SPM, Leak Testing SPM (Denso, Avelino)</li>
//             <li className="mb-2">South Africa – US Welding SPM, Post Process SPM, EOL Testing SPM (MSSL-RSA)</li>
//             <li className="mb-2">UAE - Aerospace Equipment (STRATA, Al-Ain)</li>
//             <li className="mb-2">USA – Consumer Product (AKA Bedside Butler, Washington-USA)</li>
//             <li>Thailand – Lift Assist Manipulator (Lear Corporation, Rayong)</li>
//           </ul>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ServicesContent;


import React from 'react';
import certificate1 from './../Assets/certificate1.jpg';
import certificate2 from './../Assets/certificate2.jpg';
import certificate3 from './../Assets/certificate3.jpg';
import automationimage1 from './../Assets/image2.jpg';
import automationimage2 from './../Assets/automationimage2.jpg';
import roboticsimage1 from './../Assets/image1.jpg'
import roboticsimage2 from './../Assets/roboticsimage2.jpg'
import erimage1 from './../Assets/erimage1.jpg'
import erimage2 from './../Assets/erimage2.jpg'
import fximage1 from './../Assets/fximage1.jpg'
import fximage2 from './../Assets/fximage2.jpg'
import './ServicesContent.css';

const ServicesContent = () => {
  return (
    <div className="container mx-auto w-[90%] lg:w-[85%] md:w-[85%] sm:w-[85%] mt-10">
      {/* Certifications Section */}
      <section className="certifications-section my-10">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="certification-item">
            <img
              src={certificate1}
              alt="Certificate 1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="certification-item">
            <img
              src={certificate2}
              alt="Certificate 2"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="certification-item">
            <img
              src={certificate3}
              alt="Certificate 3"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Global Export Projects & Services */}
      <section className="projects-section my-10">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Global Export Projects & Services
        </h2>
        <ul className="project-list text-gray-700">
          <li className="mb-2">Czech Republic – US Welding SPM (MATE, Prague)</li>
          <li className="mb-2">Italy – US Welding SPM, Leak Testing SPM (Denso, Avelino)</li>
          <li className="mb-2">South Africa – US Welding SPM, Post Process SPM, EOL Testing SPM (MSSL-RSA)</li>
          <li className="mb-2">UAE - Aerospace Equipment (STRATA, Al-Ain)</li>
          <li className="mb-2">USA – Consumer Product (AKA Bedside Butler, Washington-USA)</li>
          <li>Thailand – Lift Assist Manipulator (Lear Corporation, Rayong)</li>
        </ul>
      </section>

      {/* Automation Section */}
      <section className="automation-section my-10">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Automation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Machine 1 */}
          <div className="automation-item">
            <img
              src={automationimage1}
              loading="lazy"
              alt="22B RAP CAB BOX POST PROCESS SPM"
              className="w-full h-auto object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              22B RAP CAB BOX POST PROCESS SPM
            </h3>
            <p className="text-gray-700">
              A complete automation solution designed for high-precision punching applications, driving productivity and quality.
            </p>
          </div>
          {/* Machine 2 */}
          <div className="automation-item">
            <img
              src={automationimage2}
              loading="lazy"
              alt="Automatic Connector Assembly & Testing SPM"
              className="w-full h-auto object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              Automatic Connector Assembly & Testing SPM
            </h3>
            <p className="text-gray-700">
              Fully automated assembly and testing solution with unmatched precision and efficiency for electrical connectors.
            </p>
          </div>
        </div>
      </section>

      {/* Robotic Cell Section */}
      <section className="robotic-section my-10">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Robotic Cell</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Machine 1 */}
          <div className="robotic-item">
            <img
              src={roboticsimage1}
              loading="lazy"
              alt="FCA - Front / Rear Bumper Ultrasonic Welding SPM"
              className="w-full h-auto object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              FCA - Front / Rear Bumper Ultrasonic Welding SPM
            </h3>
            <p className="text-gray-700">
              Precision ultrasonic welding solution for front and rear bumpers designed for high-volume automotive manufacturing.
            </p>
          </div>
          {/* Machine 2 */}
          <div className="robotic-item">
            <img
              src={roboticsimage2}
              loading="lazy"
              alt="Robotic Ultrasonic Welding Cell"
              className="w-full h-auto object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              Robotic Ultrasonic Welding Cell
            </h3>
            <p className="text-gray-700">
              Advanced automation for precision welding of complex automotive components using robotic technology.
            </p>
          </div>
        </div>
      </section>

      {/* Ergonomic Lift Assist Section */}
      <section className="ergonomic-section my-10">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Ergonomic Lift Assist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Machine 1 */}
          <div className="ergonomic-item">
            <img
              src={erimage1}
              loading="lazy"
              alt="Beam Member Handling Manipulator"
              className="w-full h-auto object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              Beam Member Handling Manipulator
            </h3>
            <p className="text-gray-700">
              Advanced material handling solution for heavy beam members, enhancing safety and efficiency in manufacturing.
            </p>
          </div>
          {/* Machine 2 */}
          <div className="ergonomic-item">
            <img
              src={erimage2}
              loading="lazy"
              alt="Seat Handling Zero Gravity Manipulator"
              className="w-full h-auto object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              Seat Handling Zero Gravity Manipulator
            </h3>
            <p className="text-gray-700">
              Innovative solution for effortless handling of automotive seats during assembly and inspection with zero-gravity balancing.
            </p>
          </div>
        </div>
      </section>

      {/* Fixture Section */}
      <section className="fixture-section my-10">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Fixture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Machine 1 */}
          <div className="fixture-item">
            <img
              src={fximage1}
              loading="lazy"
              alt="BIW CMM Checking Fixtures"
              className="w-full h-auto object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              BIW CMM Checking Fixtures
            </h3>
            <p className="text-gray-700">
              Precision-engineered solutions for accurate measurement and quality control of automotive body components.
            </p>
          </div>
          {/* Machine 2 */}
          <div className="fixture-item">
            <img
              src={fximage2}
              loading="lazy"
              alt="D-Pillar Glass / Head Lamp / Tail Lamp - Aperture Gauges"
              className="w-full h-auto object-cover"
            />
            <h3 className="text-xl font-semibold mt-4">
              D-Pillar Glass / Head Lamp / Tail Lamp - Aperture Gauges
            </h3>
            <p className="text-gray-700">
              Specialized inspection tools for precise checking of apertures in automotive body components.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesContent;
