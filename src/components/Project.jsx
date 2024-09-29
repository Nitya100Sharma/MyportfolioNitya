   /* 
    File name: Project.jsx
    Author: Nitya Sharma
    Student ID: 301370145
 */


import React from 'react';
import project1Image from '../images/project_1.png';
import project2Image from '../images/project_2.png';
import project3Image from '../images/project_3.png';
import {Link} from 'react-router-dom'

const Project = () => {
    return (
        <div style={styles.container}>
             <div style={styles.buttons}>
             
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

            </div>
            <h1>My Projects</h1>


            <div style={styles.project}>
                <img 
                    src={project1Image} 
                    alt="Project 1" 
                    style={styles.image}
                />
                <div style={styles.description}>
                    <h2>Project 1: Web Application</h2>
                    <p>
                        In this project, I developed a full-stack web application using React, Node.js, and MongoDB.
                        My role was to design the front-end user interface and integrate it with a RESTful API.
                        The outcome was a fully functional, responsive web application with user authentication, data
                        visualization, and CRUD operations.
                    </p>
                </div>
            </div>

            <div style={styles.project}>
                <img 
                    src={project2Image} 
                    alt="Project 2" 
                    style={styles.image}
                />
                <div style={styles.description}>
                    <h2>Project 2: Mobile App</h2>
                    <p>
                        I developed a mobile application using React Native for a local business. My role involved designing
                        the UI/UX and implementing the core features, considering a real-time chat function and push notifications.
                        The project was successful, leading to increased user engagement for the business.
                    </p>
                </div>
            </div>
            <div style={styles.project}>
                <img 
                    src={project3Image} 
                    alt="Project 3" 
                    style={styles.image}
                />
                <div style={styles.description}>
                    <h2>Project 3: E-commerce Platform</h2>
                    <p>
                        This project involved building an e-commerce platform using HTML, CSS, JavaScript, and Shopify’s API.
                        I was responsible for setting up the online store, customizing the user experience, and implementing
                        payment gateway integration. The platform increased sales by 30% for the client.
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
    project: {
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
    h2: {
        fontSize: '1.5em',
    }
};

export default Project;