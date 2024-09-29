/* 
    File name: Home.jsx
    Author: Nitya Sharma
    Student ID: 301370145
 */
import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
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
               <h1>Hi, I'm Nitya Sharma! I'm a passionate developer and problem solver.</h1>

            <h1>Welcome to My Personal Portfolio</h1>

            
            
            <div style={styles.mission}>


                <h1>Mission Statement</h1>
                
                <p style={{ fontSize: 30, marginTop:100}}>
                    My mission here is to become advanced and experienced developer who can lead the whole industry
                    to a new level.
                </p>
            </div>

  
        </div>
    );
};

const styles = {
    container: {
        textAlign: 'center',
        padding: '20px',
    },
    mission: {
        marginTop: 250,
    },
    buttons: {
        marginTop: '30px',
    },
    button: {
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#646cff',
        color: '#fff',
        cursor: 'pointer',
    }
};
export default Home;