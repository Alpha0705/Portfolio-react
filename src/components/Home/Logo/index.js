import React, { useRef, useEffect } from 'react';
import './index.scss';
import LogoN from '../../../assets/images/N.png';
import gsap from 'gsap';

const Logo = () => {
    const bgRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        // Move the image up with a smooth transition
        gsap.fromTo(
            bgRef.current,
            { y: 100, opacity: 0 },
            { y: -50, opacity: 1, duration: 2, ease: 'power4.out' }
        );

        // Fade in the solid logo with a slight delay
        gsap.fromTo(
            solidLogoRef.current,
            { opacity: 0, y: 100 },
            { opacity: 1, y: -50, duration: 2, delay: 2, ease: 'power4.out' }
        );
    }, []);

    return (
        <div className="logo-container" ref={bgRef}>
            <img className='solid-logo' src={LogoN} alt='N' ref={solidLogoRef} />
        </div>
    );
}

export default Logo;
