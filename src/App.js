import React from 'react';
import Home from "./Pages/Home";
import About from './Pages/About';
import { Routes,Route } from 'react-router-dom';
import Contactuspage from './Pages/Contactuspage';
import VisionMissionValue from './Pages/VisionMissionValue';
import PageNotFound from './components/PageNotFound/PageNotFound';
import ServicesPage from './Pages/ServicesPage';

const App = () => {
  return (
    <div>
     <Routes>
         <Route path='/' element={<Home />}/>
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contactuspage />} />
         <Route path="/services" element={<ServicesPage/>} />
         <Route path="/visionmissionvalues" element={<VisionMissionValue/>} />
         <Route path="*" element={<PageNotFound/>} />
     </Routes>
    </div>
  )
}

export default App;