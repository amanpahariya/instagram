import React from 'react';
import './Footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faSearch} from "@fortawesome/free-solid-svg-icons";
import {faCompass, faHeart, faPaperPlane} from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
    return (
        <div className="footer-container position-fixed bottom-0 bg-white">
            <div className="footer">

                <div className="icon"><FontAwesomeIcon className="icon-1" icon={faHome}
                                                       style={{width: 24, height: 24}}/></div>
                <div className="icon"><FontAwesomeIcon className="icon-2" icon={faSearch}
                                                       style={{width: 24, height: 24}}/></div>
                <div className="icon"><FontAwesomeIcon className="icon-3" icon={faCompass}
                                                       style={{width: 24, height: 24}}/></div>
                <div className="icon"><FontAwesomeIcon className="icon-4" icon={faHeart}
                                                       style={{width: 24, height: 24}}/></div>
            </div>
        </div>
    );
};

export default Footer;