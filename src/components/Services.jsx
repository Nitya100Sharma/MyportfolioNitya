   /* 
    File name: services.jsx
    Author: Nitya Sharma
    Student ID: 301370145
 */



import React from 'react';
import webDevImage from '../images/project_1.png';  
import mobileDevImage from '../images/project_2.png';
import generalProgImage from '../images/project_3.png';
import { Link}from 'react-router-dom'

const Services = () => {
    return (
        <div style={styles.container}>
            
            <Link to="/">
                    <button style={styles.button}>Home</button>
                </Link>

                <Link to="/about">
                    <button style={styles.button}>About Me</button>
                </Link>
                
                <Link to="/project">
                    <button style={styles.button}>My Projects</button>
                </Link>
                <Link to="/services">
                    <button style={styles.button}>Services</button>
                </Link>
                <Link to="/contact">
                    <button style={styles.button}>Contact Me</button>
                </Link>

            <h1>Services I Offer</h1>

            <div style={styles.service}>
                <img 
                    src={webDevImage} 
                    alt="Web Development" 
                    style={styles.image} 
                />
                <div style={styles.description}>
                    <h2>Web Development</h2>
                    <p>
                        I offer full-stack web development services, specializing in building responsive,
                        user-friendly websites and web applications using modern frameworks such as React,
                        Node.js, and MongoDB.
                    </p>

                </div>
            </div>

            <div style={styles.service}>
                <img 
                    src={mobileDevImage} 
                    alt="Mobile App Development" 
                    style={styles.image} 
                />
                <div style={styles.description}>
                    <h2>Mobile App Development</h2>
                    <p>
                        I develop cross-platform mobile applications using React Native. From user interface
                        design to integration with backend APIs, I create mobile apps that are fast, secure,
                        and easy to use.
                    </p>
                </div>
            </div>

            <div style={styles.service}>
                <img 
                    src={generalProgImage} 
                    alt="General Programming" 
                    style={styles.image} 
                />
                <div style={styles.description}>
                    <h2>General Programming</h2>
                    <p>
                        I provide programming services for various use cases, including automation, data
                        analysis, and algorithm development. I am proficient in multiple programming languages,
                        including Python, JavaScript, and C++.
                    </p>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
    service: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px 0',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        maxWidth: '800px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    image: {
        width: '150px',
        height: '150px',
        borderRadius: '8px',
        marginRight: '20px',
    },
    description: {
        textAlign: 'left',
    },
};

export default Services;
