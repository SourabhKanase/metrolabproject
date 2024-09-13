// src/components/PageNotFound.js
import React from 'react';
import Navbar from './../Navbar/Navbar';
import Card from './../Commanbackgroundcard/Card';
import Footer from './../Footer/Footer';
import notFoundImage from './../Assets/5156006_2676383.jpg'; // Adjust the path based on your folder structure

const PageNotFound = () => {
  return (
    <div>
      <Navbar />
      <Card text="Page Not Found" />
      <div className="container mx-auto mt-10 flex flex-col items-center justify-center text-center">
        <img
          src={notFoundImage}
          alt="Page Not Found"
          className="w-1/2 md:w-1/3 lg:w-1/4 mb-4"
        />
        <h1 className="text-3xl font-bold text-red-600">404</h1>
        <p className="text-lg text-gray-700 mt-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <p className="text-lg text-gray-700 mt-2">
          Please check the URL or return to the homepage.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
