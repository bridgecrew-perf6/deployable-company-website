import React from 'react';
import { Link } from 'react-router-dom';
import { constants } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faTiktok, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer(props) {
    return (
        <footer className="footer bg-dark py-5">
            <div className="container grid grid-3">
                <div>
                    <h1>{constants.texts.companyName}</h1>
                    <p>Copyright &copy; 2020</p>
                </div>
                <nav>
                    <ul>
                        <Link className="navbar-link" to="/"><li>Home</li></Link>
                        <Link className="navbar-link" to="/features"><li>Features</li></Link>
                        <Link className="navbar-link" to="/docs"><li>Docs</li></Link>
                    </ul>
                </nav>
                <div className="social">
                    <Link className="navbar-link" to="/">
                        <FontAwesomeIcon className="fab" icon={faGithub} size="2x" />
                    </Link>
                    <Link className="navbar-link" to="/">
                        <FontAwesomeIcon className="fab" icon={faTiktok} size="2x" />
                    </Link>
                    <Link className="navbar-link" to="/">
                        <FontAwesomeIcon className="fab" icon={faInstagram} size="2x" />
                    </Link>
                    <Link className="navbar-link" to="/">
                        <FontAwesomeIcon className="fab" icon={faTwitter} size="2x" />
                    </Link>
                    <Link className="navbar-link" to="/">
                        <FontAwesomeIcon className="fab" icon={faLinkedin} size="2x" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;