import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimationLetter';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_7vqn6z8',  // Replace with your service ID
                'template_vcklkop', // Replace with your template ID
                refForm.current,
                'HEEMMmFAxQTN0aYfS' // Replace with your public key
            )
            .then(
                () => {
                    alert('Message sent successfully!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send message!');
                }
            );
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeoutId); // Proper cleanup function
    }, []);

    return (
        <>
            <div className="Contact-container">
                <div className="text-zone">
                    <h1 className="top-tag">&lt;h1&gt;</h1>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <h1 className="bottom-tag">&lt;/h1&gt;</h1>

                    <div className="contact-forms">
                        <p>
                            I have skills in VAPT, web development, DevOps, and red team analysis, and I am always open to new opportunities and skill enhancement.
                            I focus on cryptography and vulnerability management while working remotely from India.
                        </p>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" />
                                </li>
                                <li className="full">
                                    <input type="text" name="subject" placeholder="Subject" />
                                </li>
                                <li className="full">
                                    <textarea name="message" placeholder="Message"></textarea>
                                </li>
                                <li className="full">
                                    <input type="submit" value="Send" className="flat-button" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
};

export default Contact;
