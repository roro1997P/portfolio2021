import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> Rodrigo Pacheco.</span>
                </h1>
                <p className="h-sub-text">Here we have links to my Github and Linkedin profile</p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/rodrigo-pacheco-50a63a184/" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
                    </a>
                    <a href="https://github.com/roro1997P" target="_blank" rel="noreferrer" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
