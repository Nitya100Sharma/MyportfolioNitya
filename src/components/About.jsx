
/* 
    File name: About.jsx
    Author: Nitya Sharma
    Student ID: 301370145
 */
import React from 'react';
import profileImage from '../images/IMG_7177.png';
import resume from '../Nitya Sharma - Resume 2024.pdf'
import {Link} from 'react-router-dom'
const About = () => {
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
            <h1>Nitya Sharma</h1>
            
            <img 
                src={profileImage} 
                alt="Nitya Sharma" 
                style={styles.image} 
            />

            <p style={styles.paragraph}>
                I am a software developer with a passion for building user-friendly applications
                and solving complex problems. With a background in web development and a deep
                interest in new technologies, I am constantly striving to improve my skills and
                contribute to meaningful projects. Whether it's developing web apps, mobile
                applications, or exploring new frameworks, I am always eager to learn and take on
                new challenges.
            </p>
            <a href={resume} target="_blank" rel="noopener noreferrer" style={styles.link}>
                View My Resume
            </a>

        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
    image: {
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginTop: '20px',
    },
    paragraph: {
        marginTop: '20px',
        fontSize: '18px',
        lineHeight: '1.6',
        maxWidth: '600px',
        margin: '20px auto',
    }
};

export default About;

