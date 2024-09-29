
/* 
    File name: Contact.jsx
    Author: Nitya Sharma
    Student ID: 301370145
 */

import React,{useState} from 'react';
import {useNavigate, Link}from 'react-router-dom'
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        navigate('/');
    };
    return (
        <div style={styles.container}>
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
            <h1>Contact Me</h1>
            <form style={styles.form} onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input
                    style={styles.input}

                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                   
                </label>
               
                <label>
                    
                    Last Name:
                    <input
                     style={styles.input}

                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
                
                <label>
                    Contact Number:
                    <input
                     style={styles.input}

                        type="tel"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                
                <label>
                    Email Address:
                    <input
                     style={styles.input}

                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                
                <label>
                    Message:
                    <textarea
                     style={styles.input}

                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>
                
                <button type="submit">Submit</button>
            </form>
        </div>

            
            <div style={styles.panel}>
                <h2>Get in Touch</h2>
                <p>
                    <strong>Email:</strong> nitya.sharma@gmail.com
                </p>
                <p>
                    <strong>Phone:</strong> +1 123-456-7890
                </p>
                <p>
                    <strong>Location:</strong> New York, NY, USA
                </p>
                <p>
                    <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/nitya-sharma" target="_blank" rel="noopener noreferrer">Nitya Sharma</a>
                </p>
                <p>
                    <strong>GitHub:</strong> <a href="https://github.com/Nitya100Sharma" target="_blank" rel="noopener noreferrer">github.com/nitya-sharma</a>
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
    panel: {
       
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        margin: 'auto',
        textAlign: 'left',
    },
    a: {
        color: '#646cff',
        textDecoration: 'none',
    },
    aHover: {
        color: '#535bf2',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
       
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    input: {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ddd',
        width: '100%',
    },
    textarea: {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ddd',
        width: '100%',
        height: '100px',
    },
    button: {
        padding: '10px 20px',
        
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
    },
    buttonHover: {
        
    },
};

export default Contact;
