import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/Nex.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faX } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="sidebar">
        <Link className='logo' to='/'>
            <img src={LogoS} alt="Logo" />
            
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#fff' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#fff' />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/Contact">
                <FontAwesomeIcon icon={faEnvelope} color='#fff' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='norefer' href='https://www.linkedin.com/in/neev-shah-a3803b25b/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#fff' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='norefer' href='https://github.com/Alpha0705'>
                    <FontAwesomeIcon icon={faGithub} color='#fff' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='norefer' href='https://www.instagram.com/neevtshah/'>
                    <FontAwesomeIcon icon={faInstagram} color='#fff' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='norefer' href='https://x.com/neevtshah7'>
                    <FontAwesomeIcon icon={faX} color='#fff' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;