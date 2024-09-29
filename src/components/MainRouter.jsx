   /* 
    File name: MainRouter.jsx
    Author: Nitya Sharma
    Student ID: 301370145
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Service from './Services.jsx';
import Education from './Education.jsx';
import Project from './Project.jsx';
import Layout from './Layout.jsx'


const MainRouter = () => {
    return (
        
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/layout" element={<Layout />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/project" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Service />} />
            </Routes>
      
    );
};

export default MainRouter;
