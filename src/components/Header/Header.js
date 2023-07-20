import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXing, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Header.scss';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <Link to={'/'}>
                    <h1>Angelica<span> Filippov</span></h1>
                </Link>
            </div>
            <div className="contact">
                <ul>
                    <li>
                        <a href="https://www.xing.com/profile/Angelica_Filippov/cv">
                        <FontAwesomeIcon icon={faSquareXing}  />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/angelica-boettcher/"> <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/AngelicaFilippov'>
                        <FontAwesomeIcon icon= {faGithub}/>
                        </a>
                    </li>
                </ul> 
            </div> 
        </div>
    );
}

export default Header;