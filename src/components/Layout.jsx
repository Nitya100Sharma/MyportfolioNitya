/* 
    File name: Layout.jsx
    Author: Nitya Sharma
    Student ID: 301370145
 */
import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="./Home.jsx">Home</Link> | <Link to="../About.jsx">About</Link> | <Link to="../Education.jsx">Education</Link>| <Link to="../Project.jsx">Project</Link>| <Link to="../Contact.jsx">Contact</Link>
      </nav>
         <br/>
      <hr />
      
    </>
    
  );
}
