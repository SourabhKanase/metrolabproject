import React from 'react';
import Home from "./Pages/Home";
import About from './Pages/About';
import { Routes,Route } from 'react-router-dom';
import Contactuspage from './Pages/Contactuspage';

const App = () => {
  return (
    <div>
     <Routes>
         <Route path='/' element={<Home />}/>
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contactuspage />} />
         {/* <Route path="*" element={<NotFound />} /> */}
     </Routes>
    </div>
  )
}

export default App;