import React from 'react';
import './index.scss';
import AnimatedLetters from '../AnimationLetter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faHtml5, faCss3, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'; // Cybersecurity icon
import Loader from 'react-loaders';
import { useState,useEffect } from 'react';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timeoutId);  // Proper cleanup function
    }, []);
    return (
        <>
            <div className="about-container">
                <div className="text-zone">
                    <h1 className="top-tag">&lt;h1&gt;</h1>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <h1 className="bottom-tag">&lt;/h1&gt;</h1>
                    <p>
                        I am a Red Team Analyst at DeepCytes Cyber Labs (UK), conducting advanced cyber-attack simulations during my 6-month fellowship, which began in June 2024.
                        I focus on cryptography and vulnerability management while working remotely from India.
                    </p>
                    <p>
                        I hold the Certified Expert Penetration Tester (CEPT) certification from Pristine InfoSolutions and the Certified Information Security Expert (CISEHv4) credential, showcasing my expertise in penetration testing, vulnerability management, and cryptography.
                    </p>
                    <p>
                        I am pursuing a Bachelor of Engineering in Information Technology with a focus on web development, information security, and cybersecurity. My academic training, combined with my certifications, positions me as a strong cybersecurity specialist with a passion for solving web application security challenges.
                    </p>
                    
                </div>
                <div className="stage-cube">
                    <div className="cube-spinner">
                        <div className="face face1">
                            <FontAwesomeIcon icon={faGithub} className="icon github" />
                        </div>
                        <div className="face face2">
                            <FontAwesomeIcon icon={faHtml5} className="icon html" />
                        </div>
                        <div className="face face3">
                            <FontAwesomeIcon icon={faCss3} className="icon css" />
                        </div>
                        <div className="face face4">
                            <FontAwesomeIcon icon={faReact} className="icon react" />
                        </div>
                        <div className="face face5">
                            <FontAwesomeIcon icon={faJsSquare} className="icon js" />
                        </div>
                        <div className="face face6">
                            <FontAwesomeIcon icon={faShieldAlt} className="icon security" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default About;
